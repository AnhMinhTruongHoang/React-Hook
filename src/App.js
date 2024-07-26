import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component.js/Header/Header'
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-container">
          <Outlet />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
