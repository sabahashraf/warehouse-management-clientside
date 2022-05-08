import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import "./AddItem.css";

const AddItem = () => {
  const handlesubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const img = event.target.img.value;
    const supplier = event.target.supplier.value;
    const product = { name, description, price, quantity, img, supplier };

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
        }
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="my-5">Add a furniture to the inventory</h2>
      <form className="w-75 d-flex flex-column" onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="name" required />
        <input type="text" name="supplier" placeholder="supplier" required />
        <input type="text" name="img" placeholder="img" required />
        <textarea
          name="description"
          placeholder="description"
          cols="30"
          rows="4"
          required
        ></textarea>
        <input type="text" name="price" placeholder="price" required />
        <input type="text" name="quantity" placeholder="quantity" required />
        <input className="bg-primary" type="submit" value="Add an item" />
      </form>
    </div>
  );
};

export default AddItem;
