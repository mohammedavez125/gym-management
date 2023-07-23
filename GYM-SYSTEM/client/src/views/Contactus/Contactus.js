import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Contactus.css";
import axios from "axios";
import swal from "sweetalert";
import { loginRequired } from "../../util/LoginRequired";
function Contactus() {
  useEffect(() => {
    loginRequired();
  }, []);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  async function sendresponce() {
    const response = await axios.post("/contact", {
      name: name,
      email: email,
      message: message,
    });

    if (response.data.success) {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Success",
      });
    } else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
    }
    setEmail("");
    setMessage("");
    setName("");
  }
  return (
    <div>
      <Navbar />

      <div id="section-wrapper">
        <div className="box-wrapper">
          <div className="info-wrap">
            <h2 className="info-title">Contact Information</h2>
            <h3 className="info-sub-title">
              Fill up the form and our Team will get back to you within 24 hours
            </h3>
            <ul className="info-details">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>Phone:</span>{" "}
                <a href="tel:+ 1235 2355 98">+91 - 8261025656</a>
              </li>
              <li>
                <i className="fas fa-paper-plane"></i>
                <span>Email:</span>{" "}
                <a href="mailto:info@yoursite.com">Gym@gym.com</a>
              </li>
              <li>
                <i className="fas fa-globe"></i>
                <span>Website:</span>{" "}
                <a href="https://gymsystem.onrender.com/login">
                  gymsystem.onrender.com
                </a>
              </li>
            </ul>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="form-wrap form-height">
            <h2 className="form-title">Send us a message</h2>
            <div className="form-fields ">
              <div className="form-group ">
                <input
                  type="text"
                  className="fname "
                  placeholder=" Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  id=""
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              onClick={sendresponce}
              value="Send Message"
              className="submit-button"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
