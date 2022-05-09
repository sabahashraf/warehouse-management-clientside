import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../shared pages/Footer/Banner/Banner";
import Faq from "../Faq/Faq";

import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Inventory></Inventory>
      <div className="container text-center my-5">
        <Link to="/manage">
          <button className="btn btn-primary ">Manage Inventory</button>
        </Link>
      </div>
      <Faq></Faq>
      <div className="container my-5 text-center">
        <h2>New Furniture,sweet savings - straight to your inbox</h2>
        <p>Keep up with what we're up to.Unsubscribe at any time</p>
        <form className="d-flex w-25 mx-auto mt-3">
          <input
            className="form-control me-3 "
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
