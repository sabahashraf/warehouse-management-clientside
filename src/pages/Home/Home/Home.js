import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../shared pages/Footer/Banner/Banner";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <div className="container text-center my-5">
        <button onClick={navigate("/manage")} className="btn btn-primary ">
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Home;
