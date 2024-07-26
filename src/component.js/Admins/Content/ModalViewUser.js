import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { postViewUser } from "../../../Service/apiServices";
import _ from "lodash";

const ModalViewUser = (props) => {
  const { show, setShow, DataView, dataUpdate } = props;

  const handleClose = () => setShow(false);

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [preIMG, setPreIMG] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setPassword(dataUpdate.password); // Assuming password is part of dataUpdate
      setUserName(dataUpdate.username);
      setRole(dataUpdate.role);
      setImage(dataUpdate.image);
      if (dataUpdate.image) {
        setPreIMG(`data:image/png;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitUser = async () => {
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Email không hợp lệ");
      return;
    }

    let data = await postViewUser(DataView.id, userName, role, image,);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListUser();
    } else if (data && data.EC !== 0) {
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
        <Modal.Title>Preview user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="row g-3">
          <div className="col-md-6" style={{ pointerEvents: 'none' }}>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={dataUpdate.email}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              value={dataUpdate.password}
              disabled
            />
          </div>
          <div className="col-md-6" style={{ pointerEvents: 'none' }}  >
            <label className="form-label  ">Tên người dùng</label>
            <input
              type="text"
              className="form-control"
              value={dataUpdate.username}
            />
          </div>
          <div className="col-md-4" style={{ pointerEvents: 'none' }}>
            <label className="form-label">Vai trò</label>
            <select className="form-select" value={role}>
              <option value="USER">Người dùng</option>
              <option value="ADMIN">Quản trị viên</option>
            </select>
          </div>
          <div className="col-md-12 img-preview">
            {preIMG ? (
              <img src={preIMG} alt="Xem trước" />
            ) : (
              <span>Xem trước hình ảnh</span>
            )}
          </div>
          {/* <div className="col-md-12">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleUpload}
            />
          </div> */}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalViewUser;
