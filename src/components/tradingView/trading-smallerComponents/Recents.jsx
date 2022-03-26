import { isTSMethodSignature } from "@babel/types";
import React from "react";

const Recents = () => {
  const recentTrades = [
    {
      id: 1,
      dealNumber: "Deal number 126515",
      tradeTime: "17.24AM",
      status: "complete",
      tradeAmount: "0.00113BTC",
    },
    {
      id: 2,
      dealNumber: "Deal number 123675",
      tradeTime: "18.14AM",
      status: "pending",
      tradeAmount: "3.90244 LTC",
    },
    {
      id: 3,
      dealNumber: "Deal number 123675",
      tradeTime: "18.14AM",
      status: "pending",
      tradeAmount: "3.90244 LTC",
    },
    {
      id: 4,
      dealNumber: "Deal number 123675",
      tradeTime: "18.14AM",
      status: "pending",
      tradeAmount: "3.90244 LTC",
    },
    {
      id: 5,
      dealNumber: "Deal number 123675",
      tradeTime: "18.14AM",
      status: "pending",
      tradeAmount: "3.90244 LTC",
    },
  ];

  return (
    <div className="col-lg-7">
      <section
        className="box has-border-left-3"
        style={{
          padding: "0 20px 30px 20px",
          marginTop: 0,
          boxShadow: "0 1px 3px rgba(33,33,33,.2)",
          webkitBoxShadow: "0 1px 3px rgba(33,33,33,.2)",
        }}
      >
        <header className="panel_header">
          <h2 className="title pull-left">Recent trading activities</h2>
          <div className="actions panel_actions pull-right">
            <a className="box_toggle fa fa-chevron-down"></a>
            <a
              className="box_setting fa fa-cog"
              data-toggle="modal"
              href="#section-settings"
            ></a>
            <a className="box_close fa fa-times"></a>
          </div>
        </header>
        <div className="content-body">
          <div className="row">
            <div className="col-xs-12">
              <div className="table-responsive" data-pattern="priority-columns">
                <table
                  id="tech-companies-1"
                  className="table table-small-font no-mb table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      <th>Deal ID Number</th>
                      <th data-priority="1">Trade Time</th>
                      <th data-priority="3">Status</th>
                      <th data-priority="1">Last Trade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTrades.map((recentTrade) => (
                      <tr key={recentTrade.id}>
                        <th>
                          <i className="fa fa-dot-circle-o complete"></i>{" "}
                          {recentTrade.dealNumber}
                        </th>
                        <td>{recentTrade.tradeTime} </td>
                        <td>
                          <span className="status-complete">
                            {" "}
                            {recentTrade.status}{" "}
                          </span>
                        </td>
                        <td>
                          <i className="fa fa-plus complete normal"></i>
                          {recentTrade.tradeAmount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recents;
