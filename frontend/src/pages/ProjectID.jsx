import React, {useState} from "react";
import Onesign from "../assets/onesign.png";
import Navbar from "../components/Navbar";

const ProjectID = () => {

    const [host, setHost] = useState({
      ProjectID: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setHost((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  return (
    <div className=" gradient-container h-screen grotesk-font ">
      <Navbar />
      <div className="  mx-6 pt-[8%] items-center">
        <div className="">
          <p className="text-6xl text-center text-white font-semibold">Create your Project ID</p>
        </div>
        <div className="  flex justify-center mt-10">
          <div className=" border-2 gradient-border w-[50%] p-6">
            <h1 className=" text-white text-xl">
              OneSign ID
              <input
                type="text"
                className=" block py-2.5 pl-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-emerald-400 focus:outline-none focus:ring-0 peer placeholder-gray-400"
                placeholder="Enter your OneSignID"
                required
                name="ProjectID"
                value={host.ProjectID}
                onChange={handleChange}
              />
            </h1>
            <div className="flex justify-center items-center hover:scale-95 ease-in-out duration-150 pt-6">
              <a
                href="https://github.com/Thirumurugan7/EthMumbai"
                target="_blank"
                className="py-3 px-3 w-auto border-2 flex justify-center gradient-border cursor-pointer font-semibold text-white hover:bg-gradient-to-r from-emerald-500 via-violet-600 to-emerald-500 hover:text-black"
              >
                Create Now 🡥
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

export default ProjectID;
