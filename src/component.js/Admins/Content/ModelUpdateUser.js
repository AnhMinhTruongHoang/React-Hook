import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaFileUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../Service/apiServices";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");
  const [preIMG, setPreIMG] = useState("");

  const handleClose = () => {
    setShow(false);
    setPassword("");
    setUserName("");
    setRole("USER");
    setImage("");
    setPreIMG("");
    setEmail("");
    props.resetUpdateData();
  };

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email || "");
      setPassword(dataUpdate.password || "");
      setUserName(dataUpdate.username || "");
      setRole(dataUpdate.role || "USER");
      setImage(dataUpdate.image || "");

      if (dataUpdate.image) {
        setPreIMG(`data:image/png;base64,${dataUpdate.image}`);
      } else {
        setPreIMG("");
      }
    }
  }, [dataUpdate]);

  const handleUpload = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreIMG(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  const handleSubmitUser = async () => {
    console.log("Submitting user with the following details:");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Password:", password);
    console.log("Image:", image);
    console.log("User ID:", dataUpdate.id);

    let data = await putUpdateUser(username, role, image, email, dataUpdate.id);
    console.log("API response:", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListUser();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <Modal
      className="model-add-user"
      show={show}
      onHide={handleClose}
      size="xl"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Update A User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tên người dùng</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Vai trò</label>
            <select
              className="form-select"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="USER">Người dùng</option>
              <option value="ADMIN">Quản trị viên</option>
            </select>
          </div>
          <div className="col-md-12">
            <label className="form-label label-upload" htmlFor="labelUpload">
              <FaFileUpload /> Tải ảnh lên
            </label>
            <input
              type="file"
              id="labelUpload"
              hidden
              onChange={handleUpload}
            />
          </div>
          <div className="col-md-12 img-preview">
            {preIMG ? (
              <img src={preIMG} alt="Xem trước" />
            ) : (
              <span>Xem trước hình ảnh</span>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmitUser}>
          Lưu thay đổi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdateUser;
