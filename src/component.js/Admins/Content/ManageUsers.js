import React, { useState, useEffect } from "react";
import ModalCreateUser from "./ModelCreateUser";
import "./ModelUser.scss";
import { FaFacebook } from "react-icons/fa";
import { getAllUser, getUserWithPage } from "../../../Service/apiServices";
import ModalViewUser from "./ModalViewUser";
import ModelDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModelUpdateUser";
import TablePages from "./TablePages";

// Component Quản lý Người dùng
const ManageUsers = (props) => {
  const limit_user = 6;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  // Sử dụng hook useState để quản lý trạng thái của Modal
  const [showModalUser, setShowModalUser] = useState(false);
  const [listUsers, SetListUser] = useState([]);

  const [ShowModalUpdateUser, SetShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [showModalViewUser, setShowModalViewUser] = useState(false);
  // const [dataView, setDataView] = useState({});

  const [showModalDeleteUser, SetshowModalDeleteUser] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  // Sử dụng useEffect để gọi hàm fetchListUser khi component được render lần đầu
  useEffect(() => {
    // fetchListUser();
    fetchListUserwithPageinate(1);
  }, []);

  // Hàm để lấy danh sách người dùng từ API
  const fetchListUser = async () => {
    let res = await getAllUser(); // Gọi hàm lấy danh sách người dùng từ dịch vụ API
    if (res.EC === 0) {
      // Kiểm tra nếu mã lỗi là 0 (không có lỗi)
      SetListUser(res.DT); // Cập nhật danh sách người dùng vào state
    }
  };

  const fetchListUserwithPageinate = async (page) => {
    let res = await getUserWithPage(page, limit_user); // Gọi hàm lấy danh sách người dùng từ dịch vụ API
    if (res.EC === 0) {
      console.log("res data", res.DT);
      // Kiểm tra nếu mã lỗi là 0 (không có lỗi)
      SetListUser(res.DT.users); // Cập nhật danh sách người dùng vào state
      setPageCount(res.DT.totalPages);
    }
  };

  const handerClickUpdate = (user) => {
    SetShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handerClickView = (user) => {
    setShowModalViewUser(true);
    setDataUpdate(user);
  };

  const handerClickDelete = (user) => {
    SetshowModalDeleteUser(true);
    setDataDelete(user);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };

  return (
    <div className="manage-user-container">
      <div className="title"></div>
      <div className="user-container">
        <div className="btn-add-new">
          {/* Nút thêm người dùng mới */}
          <button
            className="btn btn-primary"
            onClick={() => setShowModalUser(true)}
          >
            <FaFacebook /> Thêm người dùng mới
          </button>
        </div>
        <div className="table-user-container">
          <TablePages
            listuser={listUsers}
            handerClickUpdate={handerClickUpdate}
            handerClickView={handerClickView}
            handerClickDelete={handerClickDelete}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            fetchListUserwithPageinate={fetchListUserwithPageinate}
          />
        </div>
      </div>
      {/* Hiển thị ModalUser khi showModalUser là true and truyen api */}
      <ModalCreateUser
        fetchListUser={fetchListUser}
        show={showModalUser}
        setShow={setShowModalUser}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
        fetchListUserwithPageinate={fetchListUserwithPageinate}
      />

      <ModalUpdateUser
        fetchListUser={fetchListUser}
        show={ShowModalUpdateUser}
        setShow={SetShowModalUpdateUser}
        dataUpdate={dataUpdate}
        resetUpdateData={resetUpdateData}
        fetchListUserwithPageinate={fetchListUserwithPageinate}
      />

      <ModalViewUser
        fetchListUser={fetchListUser}
        dataUpdate={dataUpdate} // Corrected the prop name to match the data
        show={showModalViewUser}
        setShow={setShowModalViewUser} // Corrected the prop name
        fetchListUserwithPageinate={fetchListUserwithPageinate}
      />
      <ModelDeleteUser
        show={showModalDeleteUser}
        setShow={SetshowModalDeleteUser}
        dataDelete={dataDelete}
        fetchListUser={fetchListUser}
        fetchListUserwithPageinate={fetchListUserwithPageinate}
      />
    </div>
  );
};
export default ManageUsers;
