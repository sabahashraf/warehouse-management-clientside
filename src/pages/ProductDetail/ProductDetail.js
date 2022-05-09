import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";

const ProductDetail = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  const handleDelivered = (product) => {
    let newQuantity = parseInt(product.quantity) - 1;

    const { quantity, ...rest } = product;

    const newProduct = { quantity: newQuantity, ...rest };
    //setProduct(newProduct);

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
        setProduct(data);
        //
      });
  };
  const handleRestock = (event) => {
    event.preventDefault();

    let Q = parseInt(event.target.quantity.value);
    let P = parseInt(product.quantity);
    let add = parseInt(Q + P);

    const { quantity, ...rest } = product;
    const newProduct = { quantity: add, ...rest };
    //setProduct(newProduct);

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
        setProduct(data);

        event.target.reset();
      });
  };
  return (
    <div className="container my-5">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={product.img} className="img-fluid rounded my-5" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>

            <p className="card-text">
              <span className="fs-6">Product id:</span>
              {product._id}
            </p>
            <p className="card-text">
              <span className="fs-6">Supplied by:</span>
              {product.supplier}
            </p>

            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <span className="fs-6">Price:</span>
              {product.price}
            </p>
            <p className="card-text ">
              <span className="fs-6">Quantity:</span>
              {product.quantity}
            </p>
            <button
              className="btn btn-background"
              onClick={() => handleDelivered(product)}
            >
              Delivered
            </button>
            <form className="my-3" onSubmit={handleRestock}>
              <input
                className="form-control w-25"
                type="text"
                name="quantity"
                placeholder="restock the item"
                id=""
              />
              <input
                className="btn btn-background"
                style={{ width: "120px" }}
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
