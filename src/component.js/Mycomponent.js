import React from "react";
import UserInfor from "./Userinfor";

class Mycomponent extends React.Component {
  

  // Onclickhandler = (event) => {
  //   this.setState({
  //     name: "eric",
  //     age: Math.floor(Math.random() * 100 + 1),
  //   });

  //   alert("ok");
  // };

  // onMouseoverHander = (event) => {
  //   console.log(event.pageX);
  // };
 
  render() {
    return (
      <div>
     
        <UserInfor/>
      </div>
    );
  }
}

export default Mycomponent;
