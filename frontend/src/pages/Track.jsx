import React from "react";
import Onesign from "../assets/onesign.png";
import Navbar from "../components/Navbar";

const Track = () => {
  return (
    <div className=" gradient-container h-screen grotesk-font ">
      <Navbar />
      <div className="  mx-6 pt-[10%] items-center space-x-16">
        <div className=" bottom-0 absolute animate-pulse">
            <img src={Onesign} alt="OneSign" />
        </div>
      </div>
    </div>
  );
};

export default Track;
