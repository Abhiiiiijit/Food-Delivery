import React from "react";
import "./card.css";
export default function Card() {
  return (
    <>
      <div className="ml-3">
        <div className="card card_style mt-3">
          <img src="one.jpg" className="card-img-top " alt="..." />
          {/* Foody_1.png */}
          <div className="card-body">
            <h3 className="card-title">Bring Me Meal</h3>
            <p className="card-text">Food Delivery Site</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <div className="container w-100">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              earum eveniet. Perspiciatis distinctio minus maxime voluptatibus
              temporibus alias odio totam.
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(10), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
                <option value="bulk">Bulk</option>
              </select>
              <button className="btn btn-outline-info" to="/">
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
