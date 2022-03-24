import React from "react";

const Security = () => {
  return (
    <section className="wrapper main-wrapper row">
      <div className="col-xs-12">
        <div className="page-title">
          <div className="pull-left">
            {/* <!-- PAGE HEADING TAG - START --> */}
            <h1 className="title">Security</h1>
            {/* <!-- PAGE HEADING TAG - END --> */}
          </div>
        </div>
      </div>
      <div className="col-xs-12">
        <section className="box over-h">
          <div className="content-body">
            <div className="row">
              <div className="col-xs-12">
                <div className="col-lg-6">
                  <div className="left-col">
                    <h2 className="mt-20">
                      <small>Be Your Own Bank</small>
                    </h2>
                    <div className="col-xs-12 no-pl mt-10">
                      <a
                        href="buy-and-sell.html"
                        className="btn btn-primary btn-corner right15"
                      >
                        <i
                          className="fa fa-long-arrow-down complete color-white"
                          aria-hidden="true"
                        ></i>
                        RECIEVE
                      </a>

                      <a
                        href="buy-and-sell.html"
                        className="btn btn-primary btn-corner right15"
                      >
                        <i
                          className="fa fa-long-arrow-up complete color-white"
                          aria-hidden="true"
                        ></i>
                        SEND
                      </a>
                      <a href="#" className="btn btn-primary btn-corner">
                        <i className="fa fa-copy" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-col">
                    <h3 className="mt-20">
                      <small>RUB 172198012830</small>
                    </h3>
                    <div className="col-sm-6 no-pr">
                      <div className="btc-balance">
                        <h3 className="">
                          <i className="cc BTC color-primary"></i>1.95039 BTC
                        </h3>
                      </div>
                    </div>
                    <div className="col-sm-6 no-pl">
                      <div className="btc-balance">
                        <h3 className="">
                          <i className="cc LTC color-primary"></i>30.1421 BTC
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="clearfix"></div>

      <div className="col-lg-12">
        <section className="box has-border-left-3">
          <header className="panel_header">
            <h2 className="title pull-left">Security System</h2>
          </header>
          <div className="content-body">
            <div className="row">
              <div className="tabs-wrapper">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#home-1" data-toggle="tab">
                      <img
                        src="../data/icons/sec-level1.png"
                        className="tab-img-icon"
                        alt="icon"
                      />
                      <div className="tab-head">
                        <h4 className="bold mb-5">Level 1</h4>
                        <h4 className="no-mt">
                          <small>prevent losing access to you fund</small>
                        </h4>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#level-2" data-toggle="tab">
                      <img
                        src="../data/icons/sec-level2.png"
                        className="tab-img-icon"
                        alt="icon"
                      />
                      <div className="tab-head">
                        <h4 className="bold mb-5">Level 2</h4>
                        <h4 className="no-mt">
                          <small>prevent unauthorized access to wallet</small>
                        </h4>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#level-3" data-toggle="tab">
                      <img
                        src="../data/icons/sec-level3.png"
                        className="tab-img-icon"
                        alt="icon"
                      />
                      <div className="tab-head">
                        <h4 className="bold mb-5">Level 3</h4>
                        <h4 className="no-mt">
                          <small>advanced security options of wallet </small>
                        </h4>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade in active" id="home-1">
                    <ul className="list-unstyled">
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/email-verification.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Email Verification</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                dolorum facere et error, molestias laborum at
                                animi culpa accusamus eius corrupti totam
                                temporibus quasi in aliquam.
                              </small>
                            </h4>

                            <h5 className="bold no-mb">
                              <i
                                className="fa fa-check-circle-o complete f-s-14"
                                aria-hidden="true"
                              ></i>{" "}
                              Verified
                            </h5>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/backup.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Backup Recovery Phase</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                dolorum facere et error, molestias laborum at
                                animi culpa accusamus eius corrupti totam
                                temporibus quasi in aliquam.
                              </small>
                            </h4>

                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i
                                className="fa fa-cloud-download complete color-white"
                                aria-hidden="true"
                              ></i>
                              Backup Now
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/pass-hint.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Create Password Hint</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                .
                              </small>
                            </h4>

                            <div className="form-group mb-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control bg-white"
                                  id="field-13"
                                  placeholder="password hint"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>

                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i
                                className="fa fa-cloud-download complete color-white"
                                aria-hidden="true"
                              ></i>
                              Save Now
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="level-2">
                    <ul className="list-unstyled">
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/email-verification.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Email Verification</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                dolorum facere et error, molestias laborum at
                                animi culpa accusamus eius corrupti totam
                                temporibus quasi in aliquam.
                              </small>
                            </h4>

                            <h5 className="bold no-mb">
                              <i
                                className="fa fa-check-circle-o complete f-s-14"
                                aria-hidden="true"
                              ></i>{" "}
                              Verified
                            </h5>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/backup.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Backup Recovery Phase</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                dolorum facere et error, molestias laborum at
                                animi culpa accusamus eius corrupti totam
                                temporibus quasi in aliquam.
                              </small>
                            </h4>

                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i
                                className="fa fa-cloud-download complete color-white"
                                aria-hidden="true"
                              ></i>
                              Backup Now
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/pass-hint.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Create Password Hint</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                .
                              </small>
                            </h4>

                            <div className="form-group mb-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control bg-white"
                                  id="field-14"
                                  placeholder="password hint"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>

                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i
                                className="fa fa-cloud-download complete color-white"
                                aria-hidden="true"
                              ></i>
                              Save Now
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="level-3">
                    <ul className="list-unstyled">
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/email-verification.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Email Verification</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                dolorum facere et error, molestias laborum at
                                animi culpa accusamus eius corrupti totam
                                temporibus quasi in aliquam.
                              </small>
                            </h4>

                            <h5 className="bold no-mb">
                              <i
                                className="fa fa-check-circle-o complete f-s-14"
                                aria-hidden="true"
                              ></i>{" "}
                              Verified
                            </h5>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/backup.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Backup Recovery Phase</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                dolorum facere et error, molestias laborum at
                                animi culpa accusamus eius corrupti totam
                                temporibus quasi in aliquam.
                              </small>
                            </h4>

                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i
                                className="fa fa-cloud-download complete color-white"
                                aria-hidden="true"
                              ></i>
                              Backup Now
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="security-option-wrapper">
                          <img
                            src="../data/icons/pass-hint.png"
                            className="tab-img-icon"
                            alt="icon"
                          />
                          <div className="tab-head">
                            <h4 className="bold mb-5">Create Password Hint</h4>
                            <h4 className="no-mt">
                              <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Deserunt nihil, maxime cumque
                                .
                              </small>
                            </h4>

                            <div className="form-group mb-10">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control bg-white"
                                  id="field-15"
                                  placeholder="password hint"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>

                            <a
                              href="buy-and-sell.html"
                              className="btn btn-primary btn-corner right15"
                            >
                              <i
                                className="fa fa-cloud-download complete color-white"
                                aria-hidden="true"
                              ></i>
                              Save Now
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="clearfix"></div>
    </section>
  );
};

export default Security;
