import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./../../images/logo.png";
import { currentUser } from "../../util/currentUser";
function Navbar() {
  function logOut() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  function liginpage() {
    window.location.reload();
  }

  function btnview() {
    if (!currentUser) {
      return (
        <>
          <h6 className="me-2 text-light nav-logout" onClick={liginpage}>
            Login{" "}
            <span>
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>{" "}
          </h6>
        </>
      );
    } else {
      return (
        <>
          <h6 className="me-2 text-light nav-logout" onClick={logOut}>
            Logout{" "}
            <span>
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>{" "}
          </h6>
        </>
      );
    }
  }
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark background mb-4 navcurv positionskty">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} className="img-fluid logoImg   me-2" />{" "}
              <span className="nav-title">Gym System</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">
                    {" "}
                    Contact Us{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    {" "}
                    About Us{" "}
                  </Link>
                </li>
              </ul>
              <form className="d-flex align-items-center">{btnview()}</form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
