import { useState } from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { UserData } from "../Chartjs/data";

function Chart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Total transactions",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="grotesk-font">
      <div className=" flex justify-center">
        <div style={{ width: 500 }}>
          <BarChart chartData={userData} />
        </div>
      </div>

      <div className=" flex justify-center pt-10">
        <div style={{ width: 500 }}>
          <LineChart chartData={userData} />
        </div>
      </div>

      <div className=" flex justify-center pt-10">
        <div style={{ width: 500 }}>
          <PieChart chartData={userData} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
