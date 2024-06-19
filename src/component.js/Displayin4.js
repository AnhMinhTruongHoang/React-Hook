import React from "react";

// Mã dưới đây là vòng lặp để hiển thị danh sách người dùng
// {listUser.map((item) => {
//   return (
//     <div key={item.id}>
//       <div>my name is:{item.name}</div>
//       <div> my age is{item.age}</div>
//       <hr />
//     </div>
//   );
// })}

//////

// Mã dưới đây là điều kiện if/else để thay đổi màu sắc dựa trên độ tuổi
/* <div>
{listUser.map((item) => {
  if (item.age > 18) {
    return (
      <div key={item.id} className="reds">
        <div>my name is:{item.name}</div>
        <div> my age is{item.age}</div>
        <hr />
      </div>
    );
  } else {
    return (
      <div key={item.id} className="greens">
        <div>my name is:{item.name}</div>
        <div> my age is{item.age}</div>
        <hr />
      </div>
    );
  }
})}
</div> */

class Displayin4 extends React.Component {
  // Khởi tạo state cho component với showUser là true
  state = {
    showUser: true
  };

  // Hàm này để thay đổi trạng thái của showUser
  handleShowHide = () => {
    this.setState({
      showUser: !this.state.showUser
    });
  };

  render() {
    // Lấy danh sách người dùng từ props
    const { listUser } = this.props;

    return (
      <div>
        {/* Nút bấm để hiển thị hoặc ẩn danh sách người dùng */}
        <div>
          <button onClick={() => { this.handleShowHide() }}>
            {this.state.showUser === true ? 'hide list user:' : 'show list user:'}
          </button>
        </div>

        {/* Nếu showUser là true, hiển thị danh sách người dùng */}
        {this.state.showUser && 
          <div>
            {listUser.map((item) => {
              return (
                <div key={item.id} className={item.age > 18 ? 'greens' : 'reds'}>
                  <div>my name is:{item.name}</div>
                  <div> my age is{item.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}

export default Displayin4;
