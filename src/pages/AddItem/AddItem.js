import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import "./AddItem.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Navigate, useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handlesubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const img = event.target.img.value;
    const supplier = event.target.supplier.value;
    const email = user.email;
    const product = {
      name,
      description,
      price,
      quantity,
      img,
      supplier,
      email,
    };

    const url = "http://localhost:5000/product";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("product has been added");
          event.target.reset();
          navigate("/myItems");
        }
      });
  };
  return (
    <div className="w-md-50 w-lg-50 w-75 mx-auto min-vh-100">
      <h2 className="my-5">Add a furniture to the inventory</h2>
      <form
        className="w-md-75  w-lg-75 w-75 d-flex flex-column"
        onSubmit={handlesubmit}
      >
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <input
          type="text"
          name="supplier"
          className="form-control"
          placeholder="supplier"
          required
        />
        <input
          type="text"
          name="img"
          className="form-control"
          placeholder="img"
          required
        />
        <textarea
          className="form-control"
          name="description"
          placeholder="description"
          cols="30"
          rows="4"
          required
        ></textarea>
        <input
          type="text"
          name="price"
          className="form-control"
          placeholder="price"
          required
        />
        <input
          type="text"
          name="quantity"
          className="form-control"
          placeholder="quantity"
          required
        />
        <input
          className="btn-background btn my-5"
          type="submit"
          value="Add an item"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
