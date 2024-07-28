import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../Service/apiServices";
import { toast } from "react-toastify";
import { FaGoogle, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<FaEyeSlash />);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Email không hợp lệ");
      return;
    }

    if (!password) {
      toast.error("Mật khẩu không hợp lệ");
      return;
    }
    if (password !== password2) {
      toast.error("Mật khẩu không khớp");
      return;
    }

    e.preventDefault();
    let data = await postRegister(email, password, username);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    } else if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<FaEye />);
      setType('text');
    } else {
      setIcon(<FaEyeSlash />);
      setType('password');
    }
  };

  // Hàm kiểm tra tính hợp lệ của email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="container py-5 h-100" >
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone"
          />
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form onSubmit={handleSignUp}>
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="email"
                id="form1Example13"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="text"
                id="form1Example23"
                className="form-control form-control-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>

            <div data-mdb-input-init className="form-outline mb-4 password-input">
              <input
                type={type}
                id="form1Example23"
                className="form-control form-control-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <span className="password-toggle-icon" onClick={handleToggle} style={{ cursor: 'pointer' }}>
                {icon}
              </span>
            </div>

            <div data-mdb-input-init className="form-outline mb-4 password-input">
              <input
                type={type}
                id="form1Example23"
                className="form-control form-control-lg"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Re-enter Password"
                required
              />
              <span className="password-toggle-icon" onClick={handleToggle} style={{ cursor: 'pointer' }}>
                {icon}
              </span>
            </div>

            <div className="d-flex justify-content-around align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form1Example3">
                  Remember me
                </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>

            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-lg btn-block"
              style={{ alignItems: "center", justifyItems: "center" }}
            >
              Sign Up
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-secondary btn-lg btn-block"
              style={{ alignItems: "center", justifyItems: "center" }}
              onClick={() => navigate('/')}
            >
              Cancel
            </button>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>

            <a
              data-mdb-ripple-init
              className="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "red" }}
              href="#!"
              role="button"
            >
              <FaGoogle /> <i>Continue with Google</i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <FaTwitter /> <i>Continue with Twitter</i>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
