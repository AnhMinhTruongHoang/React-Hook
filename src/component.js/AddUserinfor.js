import React from "react";

class AddUserinfor extends React.Component {
  // Khởi tạo state của component với các thuộc tính name, address và age
  state = {
    name: "",
    address: "",
    age: 24,
  };

  // Hàm xử lý để cập nhật name trong state khi input thay đổi
  handerOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // Hàm xử lý để cập nhật age trong state khi input thay đổi
  handerOnChange2 = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  // Hàm xử lý khi form được submit để ngăn hành động mặc định và hiển thị thông báo với name và age
  handerOnSubmit = (event) => {
    event.preventDefault(); // Ngăn hành động mặc định của form khi submit
    ////////////////////////
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() + 1) + "random",
      name: this.state.name,
      age: this.state.age,
    });

    alert(`${this.state.name} & ${this.state.age}`); // Hiển thị thông báo với name và age
  };

  // Hàm render để hiển thị giao diện của component
  render() {
    return (
      <div>
        {/* Hiển thị giá trị hiện tại của state */}
        tên tôi là {this.state.name} và tôi đến từ {this.state.address}, tôi{" "}
        {this.state.age} tuổi
        {/* Form để cập nhật name và age */}
        <form onSubmit={(event) => this.handerOnSubmit(event)}>
          <label>Tên của bạn:</label>
          {/* Ô input cho name với hàm xử lý thay đổi */}
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handerOnChange(event)}
          ></input>

          <label>Tuổi của bạn:</label>
          {/* Ô input cho age với hàm xử lý thay đổi */}
          <input
            value={this.state.age}
            type="number"
            onChange={(event) => this.handerOnChange2(event)}
          ></input>

          {/* Nút submit */}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserinfor;
