import React from "react";
import Displayin4 from "./Displayin4";
import AddUserinfor from "./AddUserinfor";

class Mycomponent extends React.Component {
  // Khởi tạo state của component với thuộc tính listUser
  state = {
    listUser: [
      { id: 1, name: "minh", age: 16 },
      { id: 2, name: "anh", age: 40 },
      { id: 3, name: "nhan", age: 69 },
    ],
  };

  // Hàm xử lý để thêm người dùng mới vào danh sách
  handleAddNewUser = (userobj) => {
    this.setState({
      listUser: [userobj, ...this.state.listUser]
    })
  }

  handleDeleteUser = (userId) =>{
    let listUserC = this.state.listUser;
    listUserC = listUserC.filter(item => item.id !== userId)  
    this.setState({
      listUser: listUserC
    })
  }

  // Hàm render để hiển thị giao diện của component
  render() {
    return (
      <div>
        {/* Component để thêm thông tin người dùng mới */}
        <AddUserinfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        {/* Component để hiển thị danh sách người dùng */}
        <Displayin4 listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} />
      </div>
    );
  }
}

export default Mycomponent;