import React from "react";

import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { name, _id, img, description, supplier, price, quantity } = product;
  const navigateToproductDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="g-5 g-lg-3 col-sm-12 col-md-4 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} height={200} alt=""></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>
            <span className="fw-bold">supplied by</span> {supplier}
          </p>
          <p className="card-text">{description.slice(0, 150)}...</p>
          <p>
            <span className="fw-bold">Price:</span> ${price}
          </p>
          <p>
            <span className="fw-bold">In stock:</span> {quantity}
          </p>
          <button
            onClick={() => navigateToproductDetail(_id)}
            className="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
