import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagetitle from "../shared pages/PageTitle/Pagetitle";

const ManageItem = () => {
  <Pagetitle title="Manage"></Pagetitle>;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  //   const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="text-center my-5">This is manage page</h2>
      <table className="table w-75 mx-auto">
        <thead>
          <tr>
            <th scope="col">All Items</th>
            <th scope="col">Quantity</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>

        {products.map((product) => (
          <tbody key={product._id}>
            <tr>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="text-center">
        <Link to="/addItem">
          <button className="btn btn-primary ">Add New Item</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageItem;
