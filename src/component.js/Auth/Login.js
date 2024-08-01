import { useState } from "react"; // Sử dụng useState từ thư viện React
import "./Login.scss"; // Import file CSS cho component này
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng trang
import { postLogin } from "../../Service/apiServices"; // Import hàm postLogin từ dịch vụ API
import { toast } from "react-toastify"; // Import thư viện toast để hiển thị thông báo
import { useDispatch } from "react-redux"; // Import useDispatch từ thư viện react-redux
import { doLogin } from "../../redux/action/userAction"; // Import hàm doLogin từ tệp userAction
import { ImSpinner9 } from "react-icons/im"; //// icon xoay o nut login

const Login = (props) => {
  const [email, setemail] = useState(""); // Khai báo state cho email
  const [password, setpassword] = useState(""); // Khai báo state cho password
  const navigate = useNavigate(); // Khai báo useNavigate để điều hướng trang
  const dispatch = useDispatch(); // Khai báo useDispatch để dispatch các hành động redux
  const [isloading, setisloading] = useState(false); /// vong xoay o nut loading

  // Hàm kiểm tra tính hợp lệ của email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handerLogin = async () => {
    const isValidEmail = validateEmail(email); ///neu khong gmail hop le
    if (!isValidEmail) {
      toast.error("Email không hợp lệ");
      return;
    }

    if (!password) {
      toast.error("Mật khẩu không hợp lệ"); /// neu password khong hop le
      return;
    }
    setisloading(true); ///set hien vong xoay login
    // Hàm xử lý đăng nhập
    let data = await postLogin(email, password); // Gọi hàm postLogin và đợi kết quả
    if (data && data.EC === 0) {
      // Kiểm tra nếu đăng nhập thành công
      dispatch(doLogin(data)); // Dispatch hành động doLogin tu file userAction.js với dữ liệu nhận được
      toast.success(data.EM); // Hiển thị thông báo thành công
      setisloading(false); /// hien khi  dang login
      navigate("/"); // Điều hướng về trang chủ
    }
    if (data && +data.EC !== 0) {
      // Kiểm tra nếu đăng nhập thất bại
      toast.error(data.EM); // Hiển thị thông báo lỗi
      setisloading(false);
    }
  };

  const handlerKeyDown = (event) => {
    /// khi an enter logout or login
    if (event && event.key === "Enter") {
      handerLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet ?</span>{" "}
        {/* Hiển thị thông báo nếu chưa có tài khoản */}
        <button onClick={() => navigate("/Resgisterss")}>
          <i> Sign Up</i>
        </button>{" "}
        {/* Điều hướng đến trang đăng ký */}
      </div>
      <div className="title col-4 mx-auto">AnhMinhWeb</div>{" "}
      {/* Tiêu đề của trang đăng nhập */}
      <div className="welcome col-4 mx-auto">Hello, who this ?</div>{" "}
      {/* Thông báo chào mừng */}
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label> {/* Nhãn cho input email */}
          <input
            type={"email"}
            value={email}
            onChange={(event) => setemail(event.target.value)} // Cập nhật state email khi người dùng nhập
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label> {/* Nhãn cho input password */}
          <input
            type={"password"}
            value={password}
            onChange={(event) => setpassword(event.target.value)} // Cập nhật state password khi người dùng nhập
            className="form-control"
            onKeyDown={(event) => handlerKeyDown(event)}
          ></input>
        </div>
        <span className="fp col-4 mx-auto"> Forgot Password ? </span>{" "}
        {/* Liên kết đến trang quên mật khẩu */}
        <div className="btn-submit col-4 mx-auto">
          <button onClick={() => handerLogin()} disabled={isloading}>
            {isloading === true && <ImSpinner9 className="loader-Icon" />}{" "}
            <span>Login</span>
          </button>
          {/* Gọi hàm handerLogin khi nhấn nút + css tao vong' xoay  */}
        </div>
      </div>
      <div className="text-center pt-4">
        <span
          className="back"
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          &#60;&#60; Go to HomePage
        </span>{" "}
        {/* Liên kết trở về trang chủ */}
      </div>
    </div>
  );
};

export default Login; // Xuất component Login để sử dụng trong các phần khác của ứng dụng
