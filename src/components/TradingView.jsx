import React from "react";
import TradingViewHead from "../components/tradingView/trading-smallerComponents/Trading-viewHead";
import Graphs from "./tradingView/Graphs";
import RecentActivities from "./tradingView/RecentActivities";

const TradingView = () => {
  return (
    <div style={{ padding: "3%" }} className="wrapper main-wrapper row">
      <TradingViewHead />
      <Graphs />
      <RecentActivities />
    </div>
  );
};

export default TradingView;
