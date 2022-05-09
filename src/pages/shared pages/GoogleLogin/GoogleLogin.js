import React, { useEffect } from "react";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./GoogleLogin.css";

const GoogleLogin = () => {
  const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (userG) {
      navigate(from);
    }
  }, [userG]);
  if (loadingG) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-3 mb-5 text-center">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="horizontal"></div>
        <div className="mx-2">Or</div>
        <div className="horizontal"></div>
      </div>
      <button className="text-center" onClick={() => signInWithGoogle()}>
        <img
          className="me-3"
          src="https://i.ibb.co/8428rmx/google.png"
          style={{ width: "30px" }}
          alt=""
        ></img>
        <span>Sign in with Google</span>
      </button>
      {errorG && (
        <p className="text-danger text-center">
          <small>{errorG.message}</small>
        </p>
      )}
    </div>
  );
};

export default GoogleLogin;
