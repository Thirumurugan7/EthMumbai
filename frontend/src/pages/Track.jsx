import React, { useState, useRef, useEffect } from "react";
import Onesign from "../assets/onesign.png";
import Navbar from "../components/Navbar";
import Chart from "../Chartjs/Chart";

const Track = () => {
  const [host, setHost] = useState({
    OneSignid: ""
  });
  const [showChart, setShowChart] = useState(false); // State to track whether to show the chart or not
  const chartRef = useRef(null); // Reference to the chart component

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTrackNowClick = () => {
    setShowChart(true);
    alert("Scrolling down to the analysis...");
  };

  useEffect(() => {
    if (showChart && chartRef.current) {
      chartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showChart]);

  return (
    <div className="gradient-container h-full grotesk-font overflow-x-hidden">
      <Navbar />
      <div className="mx-6 pt-[8%] items-center">
        <div className="">
          <p className="text-6xl text-center text-white font-semibold">
            Track your on-chain transactions
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="border-2 gradient-border w-[50%] p-6">
            <h1 className="text-white text-xl">
              OneSign ID
              <input
                type="text"
                className="block py-2.5 pl-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-white focus:border-emerald-400 focus:outline-none focus:ring-0 peer placeholder-gray-400"
                placeholder="Enter your OneSignID"
                required
                name="OneSignid"
                value={host.OneSignid}
                onChange={handleChange}
              />
            </h1>
            <div className="flex justify-center items-center hover:scale-95 ease-in-out duration-150 pt-6">
              <button
                className="py-3 px-3 w-32 border-2 flex justify-center gradient-border cursor-pointer font-semibold text-white hover:bg-gradient-to-r from-emerald-500 via-violet-600 to-emerald-500 hover:text-black"
                onClick={handleTrackNowClick}
              >
                Track Now 🡥
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col overflow-x-hidden">
        <div className="animate-pulse w-full pt-20">
          <img className="w-full" src={Onesign} alt="OneSign" />
        </div>
        {showChart && (
          <div className="flex justify-center pt-16" ref={chartRef}>
            <Chart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
