import Tippy from "@tippyjs/react";
import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import 'tippy.js/dist/tippy.css';
import { AuthContext } from "../../../Context/Context";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  // Dark/Light Theme State
  const [darkMode, setDarkMode] = useState(false);

  // Get user Using Context
  const { user, logOut } = useContext(AuthContext);

  // Log Out Function
  const handleLogout = () => {
    logOut()
      .then((result) => console.log("Log Out Successfull"))
      .catch((error) => console.error(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link className="logo" to="/">
          <Image className="pe-2 pb-2" src={logo}></Image>
          <span>Coding</span> Skill
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-3 mt-lg-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/faq">Faq</NavLink>
            </li>
          </Nav>
          <Nav>
            {user ? (
              <>
                <li className="pe-2">
                  {user?.photoURL ? (
                    <Tippy content={user?.displayName ? user.displayName : "Name not found"}>
                      <button><Image
                        style={{ width: "30px" }}
                        roundedCircle
                        src={user.photoURL}
                      ></Image></button>
                    </Tippy>
                  ) : (
                    <Tippy content={user?.photoURL ? user.photoURL : "Image not found"}>
                      <button><FaUserAlt></FaUserAlt></button>
                    </Tippy>
                  )}
                </li>
                <li>
                  <Link className="text-danger" onClick={handleLogout}>
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="btn btn-warning text-white p-0 py-1 px-3"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="mt-1">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </Nav>
          <div className="toggle">
            <div className="container">
              <span
                className="toggle-icon"
                style={{ color: darkMode ? "#07092a" : "#ffcd39" }}
              >
                ☀︎
              </span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider round"> </span>
                </label>
              </div>
              <span
                className="toggle-icon"
                style={{ color: darkMode ? "#c96dfd" : "#07092a" }}
              >
                ☪
              </span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
