import SideBar from "./Sidebar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

// Tạo component Admin
const Admin = (props) => {
  // Sử dụng useState để quản lý trạng thái của thanh sidebar (đã thu gọn hay chưa)
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      {/* Khu vực thanh sidebar */}
      <div className="admin-sidebar">
        {/* Component SideBar nhận prop collapsed */}
        <SideBar collapsed={collapsed} />
      </div>
      {/* Khu vực nội dung chính */}
      <div className="admin-content">
        {/* Thanh header với nút để thu gọn/mở rộng thanh sidebar */}
        <div className="admin-header">
          <FaBars onClick={() => setCollapsed(!collapsed)} />{" "}
        </div>
        {/* Khu vực hiển thị nội dung chính, sử dụng Outlet để render các component con */}

        <div className="admin-main">
          <PerfectScrollbar>
            {" "}
            <Outlet />
          </PerfectScrollbar>
        </div>
      </div>
      {/* Component ToastContainer để hiển thị thông báo */}
    </div>
  );
};
export default Admin;
