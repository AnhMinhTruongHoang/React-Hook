import React from "react";

class Mycomponent extends React.Component {
  
    state = {
    name: "Minh",
    address: "Dn",
    age: 24,
  };

  render() {
    return ( 
           
        <div> my name is {this.state.name} and im from {this.state.address} </div>

    );
  }
};

export default Mycomponent;
