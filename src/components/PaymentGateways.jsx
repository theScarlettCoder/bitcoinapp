import React from "react";

const PaymentGateways = () => {
  const paymentGates = [
    {
      name: "paypal",
      src: "/public/data/payment-gateways/paypal.png",
      check: true,
    },
  ];

  return (
    <div className="wrapper main-wrapper row">
      <div className="col-xs-12">
        <div className="page-title">
          <div className="pull-left">
            {/* <!-- PAGE HEADING TAG - START --> */}
            <h1 className="title">Available Gateways</h1>
            {/* <!-- PAGE HEADING TAG - END --> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <section className="box has-border-left-3">
          <header className="panel_header">
            <h2 className="title pull-left">PayPal</h2>
            <div className="actions panel_actions pull-right">
              <a
                className="box_toggle fa fa-chevron-down"
                aria-hidden="true"
              ></a>
              <a
                className="box_setting fa fa-cog"
                data-toggle="modal"
                href="#section-settings"
                aria-hidden="true"
              ></a>
              <a className="box_close fa fa-times" aria-hidden="true"></a>
            </div>
          </header>
          <div className="content-body">
            <div className="row">
              <div className="col-xs-12">
                <div className="text-center no-mt no-mb">
                  <div
                    className="img-affa-wrapper no-mb"
                    style={{ padding: "20px" }}
                  >
                    <div className="">
                      <img src={paymentGates.src} alt="payment-gateway" />
                    </div>
                  </div>
                  <div className="col-xs-12 no-pl no-pr">
                    <div className="col-sm-6 no-pl">
                      <a
                        href="#myModal"
                        data-toggle="modal"
                        className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                        style={{ width: "100%" }}
                      >
                        Edit
                      </a>
                    </div>
                    <div className="col-sm-1 no-pl no-pr">
                      <div
                        style={{ position: "relative", padding: "29px 0 0" }}
                      >
                        <input
                          tabindex="3"
                          type="checkbox"
                          id="flat-checkbox-1"
                          className="skin-flat-red"
                          checked=""
                        />
                      </div>
                    </div>

                    <div
                      className="col-sm-5 no-pr"
                      style={{ position: "relative", padding: "21px 0 0" }}
                    >
                      <h4 className="icheck-label form-label">
                        <small>Deactive / active</small>
                      </h4>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    role="dialog"
                    tabindex="-1"
                    id="myModal"
                    className="modal fade"
                    style={{ display: "none" }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            aria-hidden="true"
                            data-dismiss="modal"
                            className="close"
                            type="button"
                          >
                            ×
                          </button>
                          <h4 className="modal-title">Edit Payment Info</h4>
                        </div>
                        <div className="modal-body text-left">
                          <form>
                            <div className="col-sm-4 mb-20 no-pl">
                              {/* <img src={url} alt="logo" /> */}
                            </div>
                            <div className="clearfix"></div>
                            <div className="form-group">
                              <label for="modalfile3" className="form-label">
                                Upload new logo
                              </label>
                              <input type="file" id="modalfile3" />
                            </div>

                            <div className="form-group">
                              <label for="modalname1" className="form-label">
                                Name of Gateway
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="modalname1"
                                value="PayPal"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                PAYPAL BUSINESS EMAIL
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="modalwallet1"
                                value="youremail-address@yahoo.com"
                              />
                            </div>
                            <label className="form-label">Payment Stutas</label>
                            <select className="form-control mb-20">
                              <option>Active</option>
                              <option>Deactive</option>
                            </select>

                            <button type="submit" className="btn btn-primary">
                              Update
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Map throught the rest */}
    </div>
  );
};

export default PaymentGateways;
