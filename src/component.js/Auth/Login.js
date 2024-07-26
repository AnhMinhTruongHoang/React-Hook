import { useState } from "react"; // Sử dụng useState từ thư viện React
import "./Login.scss"; // Import file CSS cho component này
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng trang
import { postLogin } from "../../Service/apiServices"; // Import hàm postLogin từ dịch vụ API
import { toast } from "react-toastify"; // Import thư viện toast để hiển thị thông báo

const Login = (props) => {
  const [email, setemail] = useState(""); // Khai báo state cho email
  const [password, setpassword] = useState(""); // Khai báo state cho password
  const navigate = useNavigate(); // Khai báo useNavigate để điều hướng trang

  const handerLogin = async () => { // Hàm xử lý đăng nhập
    let data = await postLogin(email, password); // Gọi hàm postLogin và đợi kết quả
    if (data && data.EC === 0) { // Kiểm tra nếu đăng nhập thành công
      toast.success(data.EM); // Hiển thị thông báo thành công
      navigate("/"); // Điều hướng về trang chủ
    }
    if (data && +data.EC !== 0) { // Kiểm tra nếu đăng nhập thất bại
      toast.error(data.EM); // Hiển thị thông báo lỗi
    }
  };

  return (
    <div 
      className="login-container"
     
    >
      <div className="header">
        <span>Don't have an account yet ?</span> {/* Hiển thị thông báo nếu chưa có tài khoản */}
        <button onClick={() => navigate('/Resgisterss')}><i> Sign Up</i></button> {/* Điều hướng đến trang đăng ký */}
      </div>

      <div className="title col-4 mx-auto">AnhMinhWeb</div> {/* Tiêu đề của trang đăng nhập */}

      <div className="welcome col-4 mx-auto">Hello, who this ?</div> {/* Thông báo chào mừng */}

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
          ></input>
        </div>

        <span className="fp col-4 mx-auto"> Forgot Password ? </span> {/* Liên kết đến trang quên mật khẩu */}

        <div className="btn-submit col-4 mx-auto">
          <button onClick={() => handerLogin()}>Login</button> {/* Gọi hàm handerLogin khi nhấn nút */}
        </div>
      </div>

      <div className="text-center pt-4">
        <span
          className="back"
          style={{ cursor: "pointer" , color: 'blue' }}
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          &#60;&#60; Go to HomePage
        </span> {/* Liên kết trở về trang chủ */}
      </div>
    </div>
  );
};

export default Login; // Xuất component Login để sử dụng trong các phần khác của ứng dụng
