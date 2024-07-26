import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../Service/apiServices";
import { toast } from "react-toastify";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handerLogin = async () => {
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet ?</span>
        <button onClick={()=> navigate('/Resgisterss')}> Sign Up</button>
      </div>

      <div className="title  col-4 mx-auto ">AnhMinhWeb</div>

      <div className="welcome  col-4 mx-auto">Hello, who this ?</div>

      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>  
          <input
            type={"email"}
            value={email}
            onChange={(event) => setemail(event.target.email)}
            className="form-control"
          ></input>
        </div>

        <div className="form-group ">
          <label>Password</label>
          <input
            type={"password"}
            value={password}
            onChange={(event) => setpassword(event.target.password)}
            className="form-control"
          ></input>
        </div>

        <span className=" fp col-4 mx-auto"> Forgot Password ? </span>

        <div className=" btn-submit col-4 mx-auto">
          <button onClick={() => handerLogin()}>Login</button>
        </div>
      </div>

      <div className="text-center pt-4">
        <span
          className="back"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          &#60;&#60; Go to HomePage
        </span>
      </div>
    </div>
  );
};

export default Login;
