import React from "react";
import Modal from "react-bootstrap/Modal"; // Nhập Modal từ react-bootstrap
import { useState } from "react"; // Nhập useState từ React để quản lý state
import Button from "react-bootstrap/Button"; // Nhập Button từ react-bootstrap
import { FaFileUpload } from "react-icons/fa"; // Nhập biểu tượng upload file từ react-icons
import { toast } from "react-toastify"; // Nhập thư viện toast để hiển thị thông báo
import { postCreateUser } from "../../../Service/apiServices"; // Nhập hàm postCreateUser từ apiServices

// Component ModalUser
const ModalCreateUser= (props) => {
  const { show, setShow } = props;

  // Hàm đóng modal và đặt lại các trường dữ liệu
  const handleClose = () => {
    setShow(false);
    setPassword("");
    setUsername("");
    setRole("");
    setImage("");
    setpreIMG("");
    setEmail("");
  };

  // Khởi tạo các state để lưu trữ dữ liệu người dùng nhập vào
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [UserName, setUsername] = useState("");
  const [Image, setImage] = useState("");
  const [Role, setRole] = useState("User");
  const [preIMG, setpreIMG] = useState("");

  // Hàm xử lý khi người dùng tải ảnh lên
  const HanderUPload = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setpreIMG(URL.createObjectURL(event.target.files[0])); // Tạo URL tạm thời cho hình ảnh
      setImage(event.target.files[0]); // Lưu trữ file hình ảnh vào state
    }
  };

  // Hàm kiểm tra tính hợp lệ của email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // Hàm xử lý khi người dùng nhấn nút lưu
  const HanderSubmitUser = async () => {
    const isValidEmail = validateEmail(Email);

    if (!isValidEmail) {
      toast.error("Email không hợp lệ");
      return;
    }

    if (!Password) {
      toast.error("Mật khẩu không hợp lệ");
      return;
    }

    // Gửi dữ liệu đến API
    let data = await postCreateUser(Email, Password, UserName, Role, Image);
    console.log("conponent res", data);
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
    <>
      <Modal
        className="model-add-user"
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={Email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tên người dùng</label>
              <input
                type="text"
                className="form-control"
                value={UserName}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Vai trò</label>
              <select
                className="form-select"
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
                onChange={HanderUPload}
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
          <Button variant="primary" onClick={() => HanderSubmitUser()}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
