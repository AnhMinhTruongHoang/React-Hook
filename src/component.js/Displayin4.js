import React from "react";
import UserInfor from "./Userinfor";

class Displayin4 extends React.Component {
  render() {
    const {age,name} =  this.props;
    return (
      <div>
        <div>my name is {name}</div>
        <div>my age 23{age}</div>
      </div>
    );
  }
}

export default Displayin4;
