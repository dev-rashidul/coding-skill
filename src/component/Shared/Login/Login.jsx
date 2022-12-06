import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import "./Login.css";

const Login = () => {
  // Checkbox State
  const [checked, setChecked] = useState(false);

  // Get Context
  const { login, googleLogin, githubLogin } = useContext(AuthContext);

  // Error State
  const [error, setError] = useState("");

  // Navigate and Location
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Function for Checkbox
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  // Function for Login
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // Github Login
  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="login-form">
      <h4 className="text-warning text-center">Login Here</h4>
      <form onSubmit={handleLogin}>
        <div className="form-field mb-3">
          <label>Email Address</label>
          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </div>
        <div className="form-field mb-4">
          <label>Password</label>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleChecked}
            type="checkbox"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button
          className="d-block w-100 text-white"
          variant="warning"
          type="submit"
          disabled={!checked}
        >
          Login
        </Button>
        <div className="d-flex justify-content-center mt-3">
          <div className="google">
            <span onClick={handleGoogleLogin}>
              <FaGoogle></FaGoogle>
            </span>
          </div>
          <div className="github">
            <span onClick={handleGithubLogin}>
              <FaGithub></FaGithub>
            </span>
          </div>
        </div>
        <p className="text-center pt-3">
          Don't have any Account?{" "}
          <Link className="text-warning text-decoration-none" to="/register">
            Register here
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
