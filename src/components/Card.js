import React from "react";
import "./card.css";
export default function Card() {
  return (
    <>
      <div>
        <div
          className="card mt-3"
          style={{ width: "16rem", maxHeight: "auto" }}
        >
          <img
            src="https://source.unsplash.com/random/300x200/?burger"
            className="d-block w-100"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Burger</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              sunt?
            </p>
            <div className="container w-100 p-0" style={{ height: "38px" }}>
              <select
                className="m-2 w-25 h-100 bg-success rounded"
                style={{ color: "white" }}
              >
                {Array.from(Array(10), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 w-50 h-100 bg-success rounded"
                style={{ color: "white" }}
              >
                <option value="half">Half</option>
                <option value="full">Full</option>
                <option value="bulk">Bulk</option>
              </select>
            </div>
            <hr></hr>
            <button className={`btn btn-outline-warning justify-center ms-2 `}>
              Add to Cart
            </button>
            <button className="btn btn-outline-danger justify-center ms-2">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
