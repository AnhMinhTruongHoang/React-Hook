import { Fragment } from "react";
import ReactPaginate from "react-paginate";


// Thành phần TableUser để hiển thị danh sách người dùng
const TablePages = (props) => {
  // Khai báo state để lưu trữ danh sách người dùng
  const { listuser, pageCount } = props;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    props.fetchListUserwithPageinate(+event.selected + 1);
    props.setcurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };

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
                    <button
                      className="btn btn-primary"
                      onClick={() => props.handerClickView(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => props.handerClickUpdate(item)}
                    >
                      {" "}
                      Update{" "}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handerClickDelete(item)}
                    >
                      Delete
                    </button>
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
      <div className="page-pagination ">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={5}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </Fragment>
  );
};

export default TablePages;
