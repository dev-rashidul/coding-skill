import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* Footer Section HTML Start */}

      <footer>
        <div className="footer-wrapper mt-5">
          <Container>
            <Row>
              <Col md={4}>
                <div className="footer-info">
                  <div className="footer-logo">
                    <Link to="/">
                      Coding <span>Skill</span>{" "}
                    </Link>
                  </div>
                  <p>
                    Welcome, this is Coding Skill an online Code Learning
                    Platform. Here you will find world-class coding course for
                    reasonable price and unlimited support.
                  </p>
                  <div className="get-started mt-4">
                    <Link to="/courses" className="btn btn-warning px-4 py-2">
                      Get Started
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="footer-menu mt-5 mt-md-0">
                  <h3>Important Links</h3>
                  <ul className="footer-links p-0">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div className="footer-social mt-5 mt-md-0">
                  <h3>Follow Our Social Media</h3>
                  <div className="social-links">
                    <Link>
                      <FaFacebookF></FaFacebookF>
                    </Link>
                    <Link>
                      <FaInstagram></FaInstagram>
                    </Link>
                    <Link>
                      <FaTwitter></FaTwitter>
                    </Link>
                    <Link>
                      <FaLinkedinIn></FaLinkedinIn>
                    </Link>
                    <Link>
                      <FaGithub></FaGithub>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>

      {/* Footer Section HTML End */}
    </div>
  );
};

export default Footer;
