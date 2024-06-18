import React from "react";
import UserInfor from "./Userinfor";
import Displayin4 from "./Displayin4";

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
    const myinfor =['a', 'v','c'];
    
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <Displayin4  name="minh" age={26} myinfor={myinfor}/>
      </div>
    );
  }
}

export default Mycomponent;
