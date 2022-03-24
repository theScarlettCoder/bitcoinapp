import React from "react";
import Graph from "./trading-smallerComponents/Graph";
import GraphSmaller from "./trading-smallerComponents/GraphSmaller";

const Graphs = () => {
  return (
    <div className="row">
      <Graph />
      <GraphSmaller />
    </div>
  );
};

export default Graphs;
