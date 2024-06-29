import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component.js/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test Link
        <div>
          <button>
            <Link to="/Users">go user page</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to="/Admins">go user Admin</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
