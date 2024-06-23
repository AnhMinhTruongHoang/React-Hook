import React, { Fragment, useEffect, useState } from "react";
import "./Displayin4.scss";

const Displayin4 = (props) => {
  const { listUser } = props;

  const [ShowHideUser, setShowHideUser] = useState(true);

  // Hàm để hiển thị hoặc ẩn danh sách người dùng
  const handleShowHideUser = () => {
    setShowHideUser(!ShowHideUser)
  };
  
  return (
    <Fragment>
      <div className="Display-infor-container">
        <div>
          <span onClick={() => handleShowHideUser()}>
            <button>{ShowHideUser === true ? "Hide user" : "Show user"}</button>
          </span>
        </div>

        {ShowHideUser && (
          <div>
            {listUser.map((user) => {
              return (
                <div
                  key={user.id}
                  className={user.age > 18 ? "greens" : "reds"} // Đổi màu sắc dựa trên độ tuổi
                >
                  <div>my name is: {user.name}</div>
                  <div>my age is: {user.age}</div>
                  <div>
                    <button
                      onClick={() => props.handleDeleteUser(user.id)} // Nút xóa người dùng
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Displayin4;
