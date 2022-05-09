import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../shared pages/GoogleLogin/GoogleLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../shared pages/Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  if (loading) {
    return <Loading></Loading>;
  }
  const handleNameOnBlur = (event) => {
    setUserinfo({ ...userinfo, username: event.target.value });
  };
  const handleEmailOnBlur = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setUserinfo({ ...userinfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setUserinfo({ ...userinfo, email: "" });
      setErrors({ ...errors, email: "invalid email" });
    }
  };
  const handlePasswordOnBlur = (event) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(event.target.value);
    if (validPassword) {
      setUserinfo({ ...userinfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    }
  };
  const handleConfirmPasswordOnBlur = (event) => {
    if (event.target.value === userinfo.password) {
      setUserinfo({ ...userinfo, confirmPassword: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password doesn't match" });
      setUserinfo({ ...userinfo, confirmPassword: "" });
    }
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(userinfo);
    createUserWithEmailAndPassword(userinfo.email, userinfo.password);
  };

  return (
    <div className="container my-5  w-lg-50 w-50 mx-auto min-vh-100">
      <div className="w-md-75  w-lg-75">
        <h2 className="text-center my-5">Sign up</h2>
        <form className=" d-flex flex-column" onSubmit={handleSignUp}>
          <input
            className="form-input"
            type="text"
            name="name"
            onBlur={handleNameOnBlur}
            placeholder="Name"
            id=""
            required
          />
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="Email"
            onBlur={handleEmailOnBlur}
            id=""
            required
          />
          {errors?.email && (
            <p className="text-danger text-center">
              <small>{errors.email}</small>
            </p>
          )}
          <input
            type="password"
            name="password"
            className="form-input"
            onBlur={handlePasswordOnBlur}
            placeholder="Password"
            id=""
            required
          />
          {errors?.password && (
            <p className="text-danger text-center">
              <small>{errors.password}</small>
            </p>
          )}
          <input
            type="password"
            className="form-input"
            onBlur={handleConfirmPasswordOnBlur}
            name="confirm-password"
            placeholder="Confirm Password"
            id=""
            required
          />
          <div className="check-container">
            <input
              className="form-input"
              type="checkbox"
              name="checkbox"
              id=""
            />
            <label className="ms-2" htmlFor="checkbox">
              <small>Accept terms and conditions</small>
            </label>
          </div>
          <input
            className="btn btn-background mb-3"
            type="submit"
            value="Sign Up"
          ></input>
        </form>
        {error && (
          <p className="text-danger text-center">
            <small>{error.message}</small>
          </p>
        )}
        <p className="text-center">
          <small>
            Already registered?&nbsp;
            <Link className="text-decoration-none" to="/login">
              Login here!
            </Link>
          </small>
        </p>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default SignUp;
