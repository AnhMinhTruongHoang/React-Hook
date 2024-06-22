// import logo from "./logo.svg";
import "./App.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import Mycomponent from "./component.js/Mycomponent";
import React, { Fragment } from "react";

class App extends React.Component {
  render() {
    return (
    <Fragment>
        <div className="app=container">
          hello world
          <Mycomponent/>
        </div>
    </Fragment>
    );
  }
}

export default App;
