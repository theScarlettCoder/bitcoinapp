import React from "react";

const GraphSmaller = () => {
  return (
    <>
      <div className="col-md-5 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-xs-12">
            <div className="r1_graph1 db_box db_box_large">
              <span className="bold">
                <i className="complete fa fa-arrow-up"></i>79.34%
              </span>
              <span className="pull-right">
                <small>BTC Earnings</small>
              </span>
              <div className="clearfix"></div>
              <span className="db_dynamicbar">Loading...</span>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="r1_graph2 db_box db_box_large">
              <span className="bold">254.89 $</span>
              <span className="pull-right">
                <small>LTC Exchange rates</small>
              </span>
              <div className="clearfix"></div>
              <span className="db_linesparkline">Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-7 col-sm-12 col-xs-12">
        <div className="r1_maingraph db_box">
          <span className="pull-left">
            <i className="icon-purple fa fa-square icon-xs"></i>&nbsp;
            <small>BTC Earning Chart</small>&nbsp; &nbsp;
            <i className="fa fa-square icon-xs icon-primary"></i>&nbsp;
            <small>DUSH Exchange Rate</small>
          </span>
          <div
            id="db_morris_area_graph"
            style={{ height: "auto", width: "100%" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default GraphSmaller;
