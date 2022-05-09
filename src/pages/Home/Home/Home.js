import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../shared pages/Footer/Banner/Banner";
import Faq from "../Faq/Faq";

import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div className="min-vh-100">
      <Banner></Banner>

      <Inventory></Inventory>
      <div className="container text-center my-5">
        <Link to="/manage">
          <button className="btn btn-background ">Manage Inventory</button>
        </Link>
      </div>
      <Faq></Faq>
      <div className="container my-5 text-center">
        <h2>New Furniture,sweet savings - straight to your inbox</h2>
        <p>Keep up with what we're up to.Unsubscribe at any time</p>
        <form
          className="d-flex w-md-25  w-lg-25 w-lg-25  mx-auto mt-3"
          style={{ maxWidth: "400px" }}
        >
          <input
            className="form-control me-3 w-md-25  w-lg-25 w-lg-25"
            type="text"
            placeholder="your email"
          ></input>
          <button className="btn btn-background ">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
