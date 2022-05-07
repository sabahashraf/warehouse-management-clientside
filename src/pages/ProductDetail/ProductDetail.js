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
    const Q = parseInt(product.quantity) - 1;
    if (Q > 0) {
      const { quantity, ...rest } = product;
      const newProduct = { quantity: Q, ...rest };
      setProduct(newProduct);
    } else if (Q === 0) {
      const { quantity, ...rest } = product;
      const newProduct = { quantity: "sold", ...rest };
      setProduct(newProduct);
    }
  };
  return (
    <div>
      <h2>this inventory detail:{product.name}</h2>
      <p>{product.quantity}</p>
      <button onClick={() => handleDelivered(product)}>delivered</button>
    </div>
  );
};

export default ProductDetail;
