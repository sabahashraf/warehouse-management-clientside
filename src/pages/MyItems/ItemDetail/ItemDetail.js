import React from "react";

const ItemDetail = (props) => {
  const { item } = props;
  const { handleDelete } = props;

  return (
    <div className="card mb-3 mx-auto my-5" style={{ maxWidth: "540px" }}>
      <div className="row g-2">
        <div className="col-md-4">
          <img
            src={item.img}
            className="img-fluid rounded mt-5 pt-3 mx-2"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              <span className="fs-6">Product id:</span>
              {item._id}
            </p>
            <p className="card-text">
              <span className="fs-6">Supplied by:</span>
              {item.supplier}
            </p>

            <p className="card-text">{item.description}</p>
            <p className="card-text">
              <span className="fs-6">Price:</span>
              {item.price}
            </p>
            <p className="card-text ">
              <span className="fs-6">Quantity:</span>
              {item.quantity}
            </p>
            <button
              className="btn btn-background"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
