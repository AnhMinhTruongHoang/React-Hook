import { Routes, Route } from "react-router-dom";
import App from "./App";
// import User from "./component.js/Users/User";
import Admin from "./component.js/Admins/Admin";
import HomePage from "./component.js/Home/HomePage";
import DashBroad from "./component.js/Admins/Content/DashBroad";
import ManageUsers from "./component.js/Admins/Content/ManageUsers";
import Login from "./component.js/Auth/Login";
import Resgisterss from "./component.js/Auth/Registers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListQuiz from "./component.js/Users/ListQuiz";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<ListQuiz />} />
        </Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBroad />} />
          <Route path="manage-users" element={<ManageUsers />} />
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/Resgisterss" element={<Resgisterss />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
