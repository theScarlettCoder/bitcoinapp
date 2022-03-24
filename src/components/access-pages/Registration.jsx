import React from "react";

const Registration = () => {
  return (
    <div className="login_page pace-done" style={{ zoom: 1 }}>
      <div className="pace  pace-inactive">
        <div
          className="pace-progress"
          data-progress-text="100%"
          data-progress="99"
          style={{
            transform: "translate3d(100%, 0px, 0px)",
          }}
        >
          <div className="pace-progress-inner"></div>
        </div>
        <div className="pace-activity"></div>
      </div>

      <div class="container-fluid">
        <div class="login-wrapper row">
          <div
            id="login"
            class="login loginpage col-lg-offset-2 col-md-offset-3 col-sm-offset-3 col-xs-offset-0 col-xs-12 col-sm-6 col-lg-8"
            style={{ marginTop: "436px" }}
          >
            <div class="login-form-header">
              <img
                src="../data/icons/signup.png"
                alt="login-icon"
                style={{ maxWidth: "64px" }}
              />
              <div class="login-header">
                <h4 class="bold color-white">Signup Now!</h4>
                <h4>
                  <small>Please enter your data to register.</small>
                </h4>
              </div>
            </div>

            <div class="box login">
              <div class="content-body" style={{ paddingTop: "30px" }}>
                <form
                  id="msg_validate"
                  action="#"
                  novalidate="novalidate"
                  class="no-mb no-mt"
                >
                  <div class="row">
                    <div class="col-xs-12">
                      <div class="col-lg-6 no-pl">
                        <div class="form-group">
                          <label class="form-label">User name</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="form-control"
                              name="formfield2"
                              placeholder="enter username"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6 no-pr">
                        <div class="form-group">
                          <label class="form-label">Email</label>
                          <div class="controls">
                            <input
                              type="text"
                              class="form-control"
                              name="formfield1"
                              placeholder="enter email"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6 no-pl">
                        <div class="form-group">
                          <label class="form-label">Password</label>
                          <div class="controls">
                            <input
                              type="password"
                              class="form-control"
                              name="formfield2"
                              placeholder="enter password"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6 no-pr">
                        <div class="form-group">
                          <label class="form-label">Repeat Password</label>
                          <div class="controls">
                            <input
                              type="password"
                              class="form-control"
                              name="formfield1"
                              placeholder="repeat password"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="pull-left">
                        <a
                          href="index-dashboard.html"
                          class="btn btn-primary mt-10 btn-corner right-15"
                        >
                          Sign up
                        </a>
                        <a
                          href="ui-login.html"
                          class="btn mt-10 btn-corner signup"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <p id="nav">
              <a class="pull-left" href="#" title="Password Lost and Found">
                Forgot password?
              </a>
              <a class="pull-right" href="ui-login.html" title="Sign Up">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
