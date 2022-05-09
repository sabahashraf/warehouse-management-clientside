import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../shared pages/GoogleLogin/GoogleLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../shared pages/Loading/Loading";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  /*   const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  }); */
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      // navigate(from);
    }
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleEmailOnBlur = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(emailRef.current.value);
    if (validEmail) {
      /*   setUserinfo({ ...userinfo, email: event.target.value }); */
      setErrors({ ...errors, email: "" });
    } else {
      //setUserinfo({ ...userinfo, email: "" });
      setErrors({ ...errors, email: "invalid email" });
    }
  };
  const handlePasswordOnBlur = (event) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(passwordRef.current.value);
    if (validPassword) {
      /* setUserinfo({ ...userinfo, password: event.target.value }); */
      setErrors({ ...errors, password: "" });
    }
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="container my-5 w-md-50 w-lg-50 w-50 mx-auto min-vh-100">
      <ToastContainer></ToastContainer>
      <div className="w-md-75  w-lg-75">
        <h2 className="text-center my-5">Please Login</h2>
        <form className=" d-flex flex-column" onSubmit={handleLogin}>
          <input
            className="form-control"
            onBlur={handleEmailOnBlur}
            type="email"
            name="email"
            ref={emailRef}
            placeholder="email"
            id=""
            required
          />
          {errors?.email && (
            <p className="text-danger text-center">
              <small>{errors.email}</small>
            </p>
          )}
          <input
            className="form-control"
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="password"
            onBlur={handlePasswordOnBlur}
            id=""
            required
          />
          {errors?.password && (
            <p className="text-danger text-center">
              <small>{errors.password}</small>
            </p>
          )}
          <input
            className="btn btn-background mb-3"
            type="submit"
            value="Login"
          />
        </form>
        {error && (
          <p className="text-danger text-center">
            <small>{error.message}</small>
          </p>
        )}
        <p className="text-center">
          <small>
            New to Furniture warehouse!&nbsp;please &nbsp;
            <Link to="/signup" className="text-decoration-none">
              register
            </Link>
          </small>
        </p>
        <div className="text-center">
          <button
            onClick={resetPassword}
            className="btn btn-link text-decoration-none"
          >
            Forget password?
          </button>
        </div>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Login;
