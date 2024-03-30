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
    <div className="grotesk-font overflow-x-hidden"> {/* Apply overflow-x-hidden */}
      <div className="flex justify-center">
        <div className="max-w-full" style={{ width: 500 }}> {/* Apply max-w-full */}
          <BarChart chartData={userData} />
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <div className="max-w-full" style={{ width: 500 }}> {/* Apply max-w-full */}
          <LineChart chartData={userData} />
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <div className="max-w-full" style={{ width: 500 }}> {/* Apply max-w-full */}
          <PieChart chartData={userData} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
