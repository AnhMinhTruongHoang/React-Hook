import React, { useState } from "react";
import Displayin4 from "./Displayin4";
import AddUserinfor from "./AddUserinfor";

const Mycomponent = (props) => {
  const [listUser, setlistUser] = useState([
    { id: 1, name: "minh", age: 16 },
    { id: 2, name: "anh", age: 40 },
    { id: 3, name: "nhan", age: 69 },
  ]);

  const handleAddNewUser = (userobj) => {
    setlistUser([userobj, ...listUser]);
  };

  const handleDeleteUser = (userId) => {
    let listUserC = listUser;
    listUserC = listUserC.filter((item) => item.id !== userId);
    setlistUser(listUserC);
  };

  return (
    <>
      <br />
      <div>
        <AddUserinfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />

        <Displayin4 listUser={listUser} handleDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
};

export default Mycomponent;
