import React from "react";

class Mycomponent extends React.Component {
  state = {
    name: "Minh",
    address: "Dn",
    age: 24,
  };

  Onclickhandler = (event) => {
    this.setState({
      name: "eric",
      age: Math.floor(Math.random() * 100 + 1),
    });

    alert("ok");
  };

  onMouseoverHander = (event) => {
    console.log(event.pageX);
  };

  render() {
    return (
      <div>
        my name is {this.state.name} and im from {this.state.address} im
        {this.state.age}
        <button onClick={this.Onclickhandler}>click me</button>
        <button
          onMouseOver={(event) => {
            this.onMouseoverHander(event);
          }}
        >
          hover
        </button>
      </div>
    );
  }
}

export default Mycomponent;
