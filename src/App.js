
import "./App.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import Mycomponent from "./component.js/Mycomponent";
import React from "react";

class App extends React.Component {
  render() {
    return (
    <>
        <div className="app=container">
          hello world
          <Mycomponent/>
        </div>
    </>
    );
  }
}

export default App;