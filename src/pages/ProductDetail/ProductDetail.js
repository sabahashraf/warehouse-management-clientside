import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleDelivered = (product) => {
    let newQuantity = parseInt(product.quantity) - 1;

    const { quantity, ...rest } = product;

    const newProduct = { quantity: newQuantity, ...rest };

    //setQuantity(newProduct.quantity);

    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };
  const handleRestock = (event) => {
    event.preventDefault();

    let Q = parseInt(event.target.quantity.value);
    let P = parseInt(product.quantity);
    let result = parseInt(Q + P);

    const { quantity, ...rest } = product;
    const newProduct = { quantity: result, ...rest };

    //setQuantity(newProduct.quantity);

    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        event.target.reset();
      });
  };
  return (
    <div>
      <h2>this inventory detail:{product.name}</h2>
      <p>{product.quantity}</p>
      <button onClick={() => handleDelivered(product)}>delivered</button>
      <form onSubmit={handleRestock}>
        <input
          type="text"
          name="quantity"
          placeholder="restock the item"
          id=""
        />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default ProductDetail;
