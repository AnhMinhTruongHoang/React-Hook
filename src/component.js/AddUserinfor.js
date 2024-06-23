import React, { useState } from "react";

const AddUserinfor = (props) => {
  const [name, setname] = useState("");
  const [address, ] = useState("");
  const [age, setage] = useState("");

  // Hàm xử lý để cập nhật name trong state khi input thay đổi
  const handerOnChange = (event) => {
    setname(event.target.value);
  };

  // Hàm xử lý để cập nhật age trong state khi input thay đổi
  const handerOnChange2 = (event) => {
    setage(event.target.value);
  };

  // Hàm xử lý khi form được submit để ngăn hành động mặc định và hiển thị thông báo với name và age

  const handerOnSubmit = (event) => {
    event.preventDefault(); // Ngăn hành động mặc định của form khi submit
    ////////////////////////
    props.handleAddNewUser({
      id: Math.floor(Math.random() + 1) + "random",
      name: name,
      age: age,
    });

    alert(`${name} & ${age}`); // Hiển thị thông báo với name và age
  };

  return (
    <div>
      {/* Hiển thị giá trị hiện tại của state */}
      tên tôi là {name} và tôi đến từ {address}, tôi
      {age} tuổi
      {/* Form để cập nhật name và age */}
      <form onSubmit={(event) => handerOnSubmit(event)}>
        <label>Tên của bạn:</label>
        {/* Ô input cho name với hàm xử lý thay đổi */}
        <input
          value={name}
          type="text"
          onChange={(event) => handerOnChange(event)}
        ></input>

        <label>Tuổi của bạn:</label>
        {/* Ô input cho age với hàm xử lý thay đổi */}
        <input
          value={age}
          type="number"
          onChange={(event) => handerOnChange2(event)}
        ></input>

        {/* Nút submit */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserinfor;
