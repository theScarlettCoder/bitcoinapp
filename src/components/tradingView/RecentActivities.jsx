import React from "react";
import Recents from "./trading-smallerComponents/Recents";

const RecentActivities = () => {
  return (
    <>
      <div className="row">
        <Recents />

        <div className="col-md-5 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-lg-12">
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
                  <h2 className="title pull-left">Transfer Coins</h2>
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
                      <div className="transfer-wraper">
                        <div className="form-group no-mb">
                          <label className="form-label">Amount</label>
                          <span className="desc">
                            minimum value "0.001 BTC"
                          </span>

                          <div className="input-group mb-10">
                            <span className="input-group-addon">$</span>
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Amount (to the nearest dollar)"
                              placeholder="enter amount"
                            />
                            <div className="input-group-btn">
                              <button
                                type="button"
                                className="btn btn-red dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="true"
                              >
                                BTC <span className="caret"></span>
                              </button>

                              <ul className="dropdown-menu dropdown-red no-spacing">
                                <li>
                                  <a href="#">LTC</a>
                                </li>
                                <li>
                                  <a href="#">DASH</a>
                                </li>
                                <li>
                                  <a href="#">Ripple</a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <label className="form-label">wallet address</label>
                          <span className="desc"></span>

                          <div className="input-group">
                            <span className="input-group-addon">
                              <span className="arrow"></span>
                              <img
                                src="../data/icons/wallet-o.png"
                                alt="icon"
                              />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="OxsD12F32xvW3deG5..."
                            />
                          </div>

                          <button
                            type="button"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            {" "}
                            Transfer Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-xs-12">
              <section
                className="box has-border-left-3 mt-15"
                style={{
                  padding: "0 20px 30px 20px",
                  marginTop: 0,
                  boxShadow: "0 1px 3px rgba(33,33,33,.2)",
                  webkitBoxShadow: "0 1px 3px rgba(33,33,33,.2)",
                }}
              >
                <header className="panel_header">
                  <h2 className="title pull-left">Recent Transaction</h2>
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
                      <div className="transaction-wraper">
                        <div className="transaction-info has-gradient-to-right-bottom">
                          <img
                            alt=""
                            src="../data/profile/profile.jpg"
                            className="img-responsive img-circle"
                          />
                          <strong className="color-white">
                            1.23<span>LTC</span>
                          </strong>
                        </div>
                        <span className="transaction-opration">
                          <i className="fa fa-arrow-right cancelled"></i>
                        </span>
                        <div className="transaction-info">
                          <img
                            alt=""
                            src="../data/profile/profile-blog.jpg"
                            className="img-responsive img-circle"
                          />
                          <strong>
                            <span>OxsD1W3d..</span>
                          </strong>
                        </div>

                        <hr />

                        <div className="transaction-info bg-gray">
                          <img
                            alt=""
                            src="../data/profile/profile.jpg"
                            className="img-responsive img-circle"
                          />
                          <strong>
                            0.03<span> BTC</span>
                          </strong>
                        </div>
                        <span className="transaction-opration">
                          <i className="fa fa-arrow-left complete"></i>
                        </span>
                        <div className="transaction-info">
                          <img
                            alt=""
                            src="../data/profile/profile-crm.jpg"
                            className="img-responsive img-circle"
                          />
                          <strong>
                            <span>W3dFeGD1..</span>
                          </strong>
                        </div>

                        <hr />

                        <div className="col-xs-12">
                          <a
                            href="#"
                            className="all-transaction text-center block"
                          >
                            <strong>
                              <i className="fa fa-plus"></i> View all
                            </strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* <!-- End .row --> */}
      </div>
    </>
  );
};

export default RecentActivities;
