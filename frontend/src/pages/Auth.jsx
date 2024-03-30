import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Navbar from "../components/Navbar";

const Auth = () => {
  return (
    <div>
      <div className=" gradient-container h-screen grotesk-font ">
        <Navbar />
        <div className="  mx-6 pt-[10%] items-center">
            <div className="gradient-border">
          <div className=" flex justify-cener=">  
            <ConnectButton />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
