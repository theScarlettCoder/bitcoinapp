import React from "react";

const TradeViewHead = () => {
  return (
    <>
      <div className="col-xs-12">
        <div className="page-title">
          <div className="pull-left">
            {/* <!-- PAGE HEADING TAG - START --> */}
            <h1 className="title">Trading View</h1>
            {/* <!-- PAGE HEADING TAG - END --> */}
          </div>

          <div className="pull-right hidden-xs">
            <ol className="breadcrumb">
              <li>
                <a href="index-dashboard.html">
                  <i className="fa fa-home"></i>Home
                </a>
              </li>

              <li className="active">
                <strong>Trading Dashboard</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default TradeViewHead;
