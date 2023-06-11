import React from "react";
import "./card.css";
export default function Card(props) {
  let option = props.options;
  let priceOption = Object.keys(option);

  return (
    <>
      <div>
        <div
          className="card mt-3"
          style={{ width: "16rem", maxHeight: "1000px" }}
        >
          <img
            // src= {"https://source.unsplash.com/random/300x200/?FriedRice"}
            src={props.imgSrc}
            className="d-block w-100"
            style={{ height: "150px", objectFit: "fill" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title fontchange">{props.foodName}</h5>
            <p className="card-text des">
              {props.description}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ad? */}
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
                {priceOption.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
            <hr></hr>
            <button
              className={`btn btn-outline-warning justify-center ms-2 fontchange`}
            >
              Add to Cart
            </button>
            <button className="btn btn-outline-danger justify-center ms-2">
              Remove
            </button>
            <hr />
            <div className="fs-5 ml-3 fontchange">Total Price:</div>
          </div>
        </div>
      </div>
    </>
  );
}
