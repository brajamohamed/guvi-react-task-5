import "./navbar2.css";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  return (
    <div className="container-fluid">
      <div className="navbar navbar-expand-lg bg-light">
        <div className="container-lg p-1">
          <button
            className="navbar-toggler ms-auto bg-success"
            data-bs-target="#menubar"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menubar">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                  ALL
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/fsd" className="nav-link">
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/ds" className="nav-link">
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/cs" className="nav-link">
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="careers/" className="nav-link">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar2;
