import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/carousal";

export default function home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
