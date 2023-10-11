import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container-fuid bg-light">
      <div className="navbar navbar-expand-lg">
        <div className="container-lg">
          <div className="navbar-brand">
            <a href="#home">
              <img
                src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"
                alt=""
              />
            </a>
          </div>
          <button
            className="navbar-toggler bg-success"
            data-bs-toggle="collapse"
            data-bs-target="#menubar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menubar">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <small>COURSES</small>
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdown1"
                  data-bs-toggle="dropdown"
                >
                  LIVE CLASSES
                </a>
                <ul className="dropdown-menu border-0">
                  <li className="my-2">
                    <a href="#" className="dropdown-item">
                      <div className="">
                        Zen Class
                        <span className="ms-3 badge bg-white text-danger border border-danger">
                          live online classes
                        </span>
                      </div>
                      <small>
                        Live Online Intesive Program + 100% Placement Support
                      </small>
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="dropdown-item">
                      <div>Full Stack Development Program (FSD) </div>
                      <div className="card-subtitle">
                        <small>
                          Learn Javascript,HTML,CSS,Java,Data Structure,MongoDB
                          & more
                        </small>
                      </div>
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="dropdown-item">
                      <div>
                        IIT-M Advanced Programming & Data Science Program{" "}
                      </div>
                      <div className="card-subtitle">
                        <small>
                          Learn Python, Machine Learning, NLP, Tableau, PowerBI
                          & more
                        </small>
                      </div>
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="dropdown-item">
                      <div>Automation & Testing Program </div>
                      <div className="card-subtitle">
                        <small>
                          Learn Selenium, Python, Java, Jenkins, Jmeter, API
                          Testing & more
                        </small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-success ps-3 text-decoration-none"
                    >
                      Explore More Programs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  PRACTICE
                </a>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a href="#" className="dropdown-item">
                      <div>Codekata</div>
                      <small className="text-primary">
                        Sharpen your coding skills, prepare for interviews
                      </small>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      <div>Webkata</div>
                      <small className="text-primary">
                        Build basic Frontend and Backend development skills
                      </small>
                    </a>
                  </li>
                  <li>
                    <a href="" className="a dropdown-item">
                      <div>IDE- Online Compailer</div>
                      <small className="text-primary">
                        Run & test your code in any programming language
                      </small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  RESOURCES
                </a>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a href="#" className="dropdown-item">
                      REWARDS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      REFERRAL
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      FORUM SUPPORT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      BLOGS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  OUR PRODUCTS
                </a>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a href="#" className="dropdown-item">
                      <div>HackerKid</div>
                      <small>Coding classes platform for K-12 children</small>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      <div>GUVI for Corporates</div>
                      <small>Meet your hiring needs at ease</small>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
