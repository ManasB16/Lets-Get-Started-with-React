import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, value, maxValue }) => {
  let heightPercentage = "0%";
  if (value > 0) {
    heightPercentage = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: heightPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
