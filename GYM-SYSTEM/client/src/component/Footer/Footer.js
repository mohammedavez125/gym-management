import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="br-radius-footer">
      <footer className="footer-section mt-4">
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p className="fontStyle">
                    Copyright &copy; 2023, All Right Reserved <br /> Developed
                    By <b> Zarar </b> And Team{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul className="li-item">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <a href="/contactus">Contact Us</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
