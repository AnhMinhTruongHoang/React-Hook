import Hvid from "../../assets/vid2.mp4";
import { useSelector } from "react-redux";
import userReducer from "../../redux/reducer/userReducer";

const HomePage = (props) => {

  const account = useSelector(state => state.user.account); 
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);  /// lay data ve tu redux

  
  
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={Hvid} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="t1">Make forms worth filling out</div>
        <div className="t2">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </div>
        <button className="b1">Get started!</button>
      </div>
    </div>
  );
};

export default HomePage;
