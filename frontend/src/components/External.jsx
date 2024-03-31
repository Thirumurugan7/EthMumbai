import React from "react";
import Navbar from "../components/Navbar";

const ExternalLink = () => {
  return (
    <div classname=" gradient-container bg-black h-screen grotesk-font">
      <div className=" text-black">
        <Navbar />
      </div>
      <div className="  mx-6 pt-[10%] items-center">
        <div className=" flex justify-center">
          <div
            classname=""
            style={{ width: "30%", height: "250px", overflow: "hidden" }}
          >
            <iframe
              classname=" "
              src="https://anon-aadhaar-rosy.vercel.app/"
              title="External Link"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no" // Disable scrolling on the iframe
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalLink;
