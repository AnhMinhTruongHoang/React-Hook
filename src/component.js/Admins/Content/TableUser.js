import { Fragment } from "react";

// Thành phần TableUser để hiển thị danh sách người dùng
const TableUser = (props) => {
  // Khai báo state để lưu trữ danh sách người dùng
  const { listuser } = props;

  return (
    <Fragment>
      {/* Bảng hiển thị danh sách người dùng */}
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Kiểm tra nếu có danh sách người dùng và có phần tử */}
          {listuser &&
            listuser.length > 0 &&
            listuser.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <th scope="row">{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-primary" onClick={ ()=> props.handlerClickView(item)} >View</button>
                    <button className="btn btn-warning mx-3"
                     onClick={() => props.handerClickUpdate(item)}> Update </button>
                    <button className="btn btn-danger" onClick={() => props.handlerClickDelete(item) }>Delete</button>
                  </td>
                </tr>
              );
            })}

          {/* Nếu không có người dùng nào trong danh sách */}
          {listuser && listuser.length === 0 && (
            <tr>
              <td colSpan={"4"}> User not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TableUser;
