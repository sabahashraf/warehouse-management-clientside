import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../shared pages/Footer/Banner/Banner";
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
    </div>
  );
};

export default Home;
