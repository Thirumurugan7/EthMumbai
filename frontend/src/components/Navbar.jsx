import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Connbutton from './Connect';
import Logo from "../assets/OneSignLogo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  return (
    <div className="bg-transparent top-0 z-50 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="flex items-center p-3 mx-3 text-white text-xl justify-between grotesk-font">
        {/* <a href="/">⫷ OneSign /⫸</a> */}
        <a to="/">
          <img
            className=" h-12 hover:scale-105 hover:cursor-pointer"
            src={Logo}
            alt=""
          />
        </a>
        <ul className="flex justify-center space-x-6 ">
          <li className="hover:cursor-pointer transition-transform hover:scale-95 ease-in-out">
            <Link
              to="/"
              className={
                "`menu-item`"
              }
              activeClassName="active"
              onMouseEnter={() => handleMenuClick("home")}
            >
              Home
            </Link>
          </li>
          <li className="hover:cursor-pointer transition-transform hover:scale-95 ease-in-out">
            <Link
              to="/track"
              className={
                "`menu-item`"
              }
              activeClassName="active"
              onMouseEnter={() => handleMenuClick("track")}
            >
              Track transactions
            </Link>
          </li>
          <li className='hover:cursor-pointer transition-transform hover:scale-95 ease-in-out'>
            <Link to="/external" 
              className={"py-3 px-3  border-2 gradient-border cursor-pointer font-semibold text-white hover:bg-gradient-to-r from-emerald-500 via-violet-600 to-emerald-500 hover:text-black `menu-item`"}
              activeClassName="active"
              onMouseEnter={() => handleMenuClick('devs')}
            > 
              Developers
            </Link>
          </li>
          {/* <li className='hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <a

              className={`menu-item`}
              activeClassName="active"
              onMouseEnter={() => handleMenuClick('claim')}
            >
              Claim
            </a>
          </li>
          <li className='hover:cursor-pointer transition-transform hover:scale-105 ease-in-out'>
            <a
           
              className={`menu-item`}
              activeClassName="active"
              onMouseEnter={() => handleMenuClick('clawback')}
            >
              Clawback
            </a>
          </li> */}
        </ul>
        {/* <div className="grotesk-font">
          <Connbutton />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
