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
  ///DRY don't repeat'
  state = {
    listUser: [
      { id: 1, name: "minh", age: 30 },
    
      { id: 2, name: "mi", age: 40 },
    
      { id: 3, name: "my", age: 20 },
    
    ],
  };

  render() {
   
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <Displayin4 listUser={this.state.listUser} />
      </div>
    );
  }
}

export default Mycomponent;
