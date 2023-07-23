import React, { useEffect } from "react";
import "./Aboutus.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { loginRequired } from "../util/LoginRequired";
import user from "./../images/user.png";

function Aboutus() {
  useEffect(() => {
    loginRequired();
  }, []);

  return (
    <div>
      <Navbar />
      <h3 className="team-title" id="team">
        Our Team
      </h3>
      <section>
        <div className="team-container">
          <div className="team-card">
            <div className="team-content">
              <div className="imgbx">
                <img src={user} />
              </div>
              <div className="contentbox">
                <h3>
                  Zarar
                  <br />
                  <br />
                  <span>DCET</span>
                  <br />
                  BE(Computer Science)
                </h3>
              </div>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a href="https://github.com">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="team-container">
          <div className="team-card">
            <div className="team-content">
              <div className="imgbx">
                <img src={user} />
              </div>
              <div className="contentbox">
                <h3>
                  Profile 2<br />
                  <br />
                  <span>DCET</span>
                  <br />
                  BE(Computer Science)
                </h3>
              </div>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a href="https://github.com">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="team-container">
          <div className="team-card">
            <div className="team-content">
              <div className="imgbx">
                <img src={user} />
              </div>
              <div className="contentbox">
                <h3>
                  Profile 3<br />
                  <br />
                  <span>DCET</span>
                  <br />
                  BE(Computer Science)
                </h3>
              </div>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a href="https://github.com">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Aboutus;
