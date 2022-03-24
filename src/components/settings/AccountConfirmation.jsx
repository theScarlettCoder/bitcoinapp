import React from "react";

const AccountConfirmation = () => {
  return (
    <section className="wrapper main-wrapper row">
      <div className="col-xs-12">
        <div className="page-title">
          <div className="pull-left">
            {/* <!-- PAGE HEADING TAG - START --> */}
            <h1 className="title">Account Settings</h1>
            {/* <!-- PAGE HEADING TAG - END --> */}
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <section className="box has-border-left-3">
          <header className="panel_header">
            <h2 className="title pull-left">Account Confirmation</h2>
          </header>
          <div className="content-body">
            <div className="row">
              <div className="col-xs-12">
                <div className="option-identity-wrapper">
                  <div className="option-icon">
                    <img
                      src="/data/icons/two-factor.png"
                      className="tab-img-icon"
                      alt="icon"
                    />
                  </div>
                  <div className="tab-head">
                    <h4 className="bold mb-5 no-mt">Email Verification</h4>
                    <h4 className="no-mt">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deserunt nihil, maxime cumque dolorum facere et
                        error, molestias laborum at animi culpa accusamus eius
                        corrupti totam temporibus quasi in aliquam sit amet,
                        consectetur adipisicing elit. Deserunt nihil, maxime
                        cumque dolorum facere et error, molestias laborum at
                        animi culpa accusamus eius corrupti totam temporibus
                        quasi in aliquam.
                      </small>
                    </h4>

                    <h5 className="bold no-mb">
                      <i className="fa fa-check-circle-o complete f-s-14"></i>{" "}
                      Verified
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="option-identity-wrapper">
                  <div className="option-icon">
                    <img
                      src="../data/icons/upload-id.png"
                      className="tab-img-icon"
                      alt="icon"
                    />
                  </div>
                  <div className="tab-head">
                    <h4 className="bold mb-5 no-mt">
                      Upload your ID to withdraw and Deposit
                    </h4>
                    <h4 className="no-mt">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deserunt nihil, maxime cumque dolorum facere et
                        error, molestias laborum at animi culpa accusamus eius
                        corrupti totam temporibus quasi in aliquam sit amet,
                        consectetur adipisicing elit. Deserunt nihil, maxime
                        cumque dolorum facere et error, molestias laborum at
                        animi culpa accusamus eius corrupti totam temporibus
                        quasi in aliquam.
                      </small>
                    </h4>

                    <h5 className="bold no-mb">
                      <i className="fa fa-check-circle-o complete f-s-14"></i>{" "}
                      Verified
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="option-identity-wrapper no-mb">
                  <div className="option-icon">
                    <img
                      src="../data/icons/home-location.png"
                      className="tab-img-icon"
                      alt="icon"
                    />
                  </div>
                  <div className="tab-head">
                    <h4 className="bold mb-5 no-mt">Proof of Address</h4>
                    <h4 className="no-mt">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deserunt nihil, maxime cumque dolorum facere et
                        error, molestias laborum at animi culpa accusamus eius
                        corrupti totam temporibus quasi in aliquam sit amet,
                        consectetur adipisicing elit. Deserunt nihil, maxime
                        cumque dolorum facere et error, molestias laborum at
                        animi culpa accusamus eius corrupti totam temporibus
                        quasi in aliquam.
                      </small>
                    </h4>

                    <h5 className="bold no-mb">
                      <i className="fa fa-check-circle-o complete f-s-14"></i>{" "}
                      Verified
                    </h5>
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
            <h2 className="title pull-left">Authentication Settings</h2>
          </header>
          <div className="content-body">
            <div className="row">
              <div className="col-xs-12">
                <div className="option-identity-wrapper no-mb">
                  <div className="option-icon">
                    <img
                      src="../data/icons/qr.png"
                      className="tab-img-icon"
                      alt="icon"
                    />
                  </div>
                  <div className="tab-head left15">
                    <h3 className="bold no-mt">Two-factor Authentication</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempora quaerat optio tempore, culpa iure ipsam voluptatum
                      amet consectetur fuga ab, blanditiis saepe alias ea,
                      corrupti doloremque.
                    </p>
                    <h4 className="">
                      <small>securit key :</small> GA783BJAH555283962GBGFLB
                    </h4>
                    <div className="clearfix"></div>
                    <div className="col-sm-9 no-pl">
                      <div className="form-group">
                        <label className="form-label">
                          Authentication code
                        </label>
                        <span className="desc">(2fa)</span>
                        <div className="controls">
                          <input
                            type="text"
                            className="form-control"
                            name="2factor"
                            placeholder="Google 2fa code"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 no-pr">
                      <button
                        type="submit"
                        className="btn btn-primary mt-30 btn-corner"
                      >
                        <i className="fa fa-check"></i> Authenticate
                      </button>
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
            <h2 className="title pull-left">Upload ID Settings</h2>
          </header>
          <div className="content-body">
            <div className="row">
              <div className="form-container">
                <form action="#">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="col-xs-12 mb-20">
                        <div className="col-sm-12 avatar-img ">
                          <div className="avatar-img-wrapper">
                            <img
                              src="../data/icons/id-card.png"
                              style={{ maxWidth: "100px" }}
                              alt=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" for="formfield10">
                              Upload ID File
                            </label>
                            <span className="desc">
                              "JPG, GIF or PNG Max size of 800K"
                            </span>
                            <div className="controls">
                              <input
                                type="file"
                                className=""
                                id="formfield10"
                                name="formfield10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pull-left">
                        <h4>
                          <i className="fa fa-info-circle color-primary complete f-s-14"></i>
                          <small>
                            Note that the ID image must be in high resolution
                            and all info is clear
                          </small>
                        </h4>
                      </div>
                      <div className="pull-right">
                        <button
                          type="submit"
                          className="btn btn-primary btn-corner right15"
                        >
                          <i className="fa fa-check"></i> Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-default btn-corner"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="clearfix"></div>

      <div className="col-lg-12">
        <section className="box has-border-left-3">
          <header className="panel_header">
            <h2 className="title pull-left">Address Proof Settings</h2>
          </header>
          <div className="content-body">
            <div className="row">
              <div className="form-container">
                <form id="icon_validate" action="#">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="col-lg-6 no-pl">
                        <div className="form-group">
                          <label className="form-label">Address Line 1 </label>
                          <span className="desc">"Maximum 40 character"</span>
                          <div className="controls">
                            <i className=""></i>
                            <input
                              type="text"
                              className="form-control"
                              name="formfield1"
                              placeholder="address line1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 no-pr">
                        <div className="form-group">
                          <label className="form-label">Address Line 2 </label>
                          <span className="desc">"Maximum 60 character"</span>
                          <div className="controls">
                            <i className=""></i>
                            <input
                              type="text"
                              className="form-control"
                              name="formfield3"
                              placeholder="address line2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 no-pl">
                        <div className="form-group">
                          <label className="form-label">Password </label>
                          <span className="desc">e.g. "lorem123"</span>
                          <div className="controls">
                            <i className=""></i>
                            <input
                              type="text"
                              className="form-control"
                              name="formfield3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 no-pr">
                        <div className="form-group">
                          <label className="form-label">Confirm Password</label>
                          <span className="desc">e.g. "lorem123"</span>
                          <div className="controls">
                            <i className=""></i>
                            <input
                              type="text"
                              className="form-control"
                              name="formfield4"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pull-left">
                        <h4>
                          <i className="fa fa-info-circle color-primary complete f-s-14"></i>
                          <small>
                            Note that password must be at lest 7 characters long
                            and maxmuinm 15 character
                          </small>
                        </h4>
                      </div>
                      <div className="pull-right">
                        <button
                          type="submit"
                          className="btn btn-primary btn-corner right15"
                        >
                          <i className="fa fa-check"></i> Proof Address
                        </button>
                        <button
                          type="button"
                          className="btn btn-default btn-corner"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AccountConfirmation;
