import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";

const Register = () => {
  // Checkbox State
  const [checked, setChecked] = useState(false);

  // Error State
  const [error, setError] = useState("");

  // Get user Using context
  const { register, googleLogin, githubLogin, updateUserProfile } =
    useContext(AuthContext);

  // Function for Checkbox
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  // Function for Login
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    register(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
        handleUserUpdateProfile(name, photo);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // Update User Profile
  const handleUserUpdateProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile);
  };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
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
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="login-form">
      <h4 className="text-warning text-center">Register Here</h4>
      <form onSubmit={handleRegister}>
        <div className="form-field mb-3">
          <label>Full Name</label>
          <FloatingLabel controlId="floatingName" label="Full Name">
            <Form.Control name="name" type="text" required />
          </FloatingLabel>
        </div>
        <div className="form-field mb-3">
          <label>Photo URL</label>
          <FloatingLabel controlId="floatingPhoto" label="Photo URL">
            <Form.Control name="photo" type="text" required />
          </FloatingLabel>
        </div>
        <div className="form-field mb-3">
          <label>Email Address</label>
          <FloatingLabel controlId="floatingEmail" label="Email address">
            <Form.Control name="email" type="email" required />
          </FloatingLabel>
        </div>
        <div className="form-field mb-4">
          <label>Password</label>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control name="password" type="password" required />
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
          Register
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
          Already have Account?
          <Link className="text-warning text-decoration-none" to="/register">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
