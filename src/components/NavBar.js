import React from "react";
import { Link } from "react-router-dom";
import "./font.css";
import { MdDeliveryDining, MdFastfood } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
// import { FaBowlFood } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link class="navbar-brand" to="/">
              <img
                src="BMM_2.png"
                alt=""
                width="40"
                height="30"
                className="d-inline-block align-text-top fontchange"
              />
              <span className="fontchange fs-2 colors">
                {" "}
                <span> </span> Bring Me Meal
                <MdFastfood />
                <MdDeliveryDining />
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active fontchange"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link fontchange" to="/login">
                    <button className="btn btn-outline-success">
                      <BiLogInCircle /> Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fontchange" to="/creatuser">
                    <button className="btn btn-outline-info">
                      <RiAccountCircleFill /> SignUp
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
