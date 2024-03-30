import React from "react";
import Navbar from "../components/Navbar";
import Onesign from "../assets/onesign.png";
// import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className=" gradient-container h-screen grotesk-font ">
      <Navbar />
      <div className="  mx-6 pt-[10%] items-center space-x-16">
        <div className="">
          {/* <img className=" h-96 w-auto" src={HomePic} alt=" OneSign" /> */}
          <p className=" text-6xl text-center text-white font-semibold">
          ⫷ OneSign /⫸
          </p>
          <p className=" text-7xl text-white pt-2 text-center ">✦ Next Gen <span className=" bg-gradient-to-t from-emerald-500 to-violet-600 font-medium bg-clip-text text-transparent">Effortless Onboarding</span> ✦</p>
        </div>
        <div className="">
          <div className="">
            <p className=" flex justify-center text-white text-xl pt-2  text-center">
              Next Gen Effortless Onboarding provides seamless <br /> decentralized access, enabling users to effortlessly log in  <br /> using only their user ID, removing the necessity for repetitive <br /> wallet connections or traditional login methods.
            </p>
          </div>
          <div className=" flex justify-center space-x-6 pt-6">
            <div className=" items-center w-24 hover:scale-95 ease-in-out duration-150">
              <a href="https://github.com/Thirumurugan7/EthMumbai" target="_blank" className=" py-3 px-3  border-2 gradient-border cursor-pointer font-semibold text-white hover:bg-gradient-to-r from-emerald-500 via-violet-600 to-emerald-500 hover:text-black">
                Github 🡥
              </a>
            </div>
            <div className=" items-center w-24 hover:scale-95 ease-in-out duration-150">
              <a href="https://github.com/Thirumurugan7/EthMumbai" target="_blank" className=" py-3 px-3 border-2 gradient-border cursor-pointer font-semibold text-white hover:bg-gradient-to-r from-emerald-500 via-violet-600 to-emerald-500 hover:text-black">
                Docs 🡥
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bottom-0 absolute animate-pulse">
          <img src={Onesign} alt="OneSign" />
      </div>
    </div>
  );
};

export default Home;
