import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ItemDetail from "../ItemDetail/ItemDetail";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/item?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((product) => product._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div className="container ">
      {items.map((item) => (
        <ItemDetail
          key={item._id}
          item={item}
          handleDelete={handleDelete}
        ></ItemDetail>
      ))}
    </div>
  );
};

export default MyItems;
