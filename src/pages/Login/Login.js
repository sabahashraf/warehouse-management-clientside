import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../shared pages/GoogleLogin/GoogleLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../shared pages/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
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
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userinfo.email, userinfo.password);
  };
  const resetPassword = async () => {
    if (userinfo.email) {
      await sendPasswordResetEmail(userinfo.email);
      toast("sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="container min-vh-100">
      <form onSubmit={handleLogin}>
        <input
          onBlur={handleEmailOnBlur}
          type="email"
          name="email"
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
          type="password"
          name="password"
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
        <input type="submit" value="Login" />
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
  );
};

export default Login;
