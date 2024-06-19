import React from "react";
import UserInfor from "./Userinfor";

class Displayin4 extends React.Component {
  render() {
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <div>
        {listUser.map((item) => {
          return (
            <div key={item.id}>
              <div>my name is:{item.name}</div>
              <div> my age is{item.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Displayin4;
