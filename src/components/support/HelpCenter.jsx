import React from "react";
import Faqs from "./Faqs";

const HelpCenter = () => {
  return (
    <div className="wrapper main-wrapper row">
      <div class="col-xs-12">
        <div class="page-title">
          <div class="pull-left">
            {/* <!-- PAGE HEADING TAG - START --> */}
            <h1 class="title">Support Center</h1>
            {/* <!-- PAGE HEADING TAG - END --> */}
          </div>

          <div class="pull-right hidden-xs">
            <ol class="breadcrumb">
              <li>
                <a href="index-dashboard.html">
                  <i class="fa fa-home" aria-hidden="true"></i>Home
                </a>
              </li>
              <li>
                <a href="ui-support.html">Support</a>
              </li>
              <li class="active">
                <strong>Help Center</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>

      <div class="col-lg-12 ">
        <section class="box nohidden has-border-left-3">
          <header class="panel_header">
            <h2 class="title pull-left">Select a topic</h2>
            <div class="actions panel_actions pull-right">
              <a class="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
              <a
                class="box_setting fa fa-cog"
                data-toggle="modal"
                href="#section-settings"
                aria-hidden="true"
              ></a>
              <a class="box_close fa fa-times" aria-hidden="true"></a>
            </div>
          </header>
          <div class="content-body" style={{ paddingBottom: "0 !important" }}>
            <div class="row">
              <div class="col-lg-4 no-pl no-pr">
                <div
                  class="tile-progress bg-accent"
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <div class="content">
                    <img
                      src="../data/icons/i1.png"
                      class="center-block mb-20"
                      style={{ maxWidth: "64px" }}
                      alt=""
                    />
                    <h4>Account Security</h4>
                    <p class="mt-10 text-center no-mb">
                      Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                      Natus sapiente mollitia nesciunt molestiae.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 no-pl no-pr">
                <div
                  class="tile-progress bg-accent"
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <div class="content">
                    <img
                      src="../data/icons/i2.png"
                      class="center-block mb-20"
                      style={{ maxWidth: "64px" }}
                      alt=""
                    />
                    <h4>Exchange Fees</h4>
                    <p class="mt-10 text-center no-mb">
                      Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                      Natus sapiente mollitia nesciunt molestiae.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 no-pl no-pr">
                <div
                  class="tile-progress bg-accent"
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <div class="content">
                    <img
                      src="../data/icons/i3.png"
                      class="center-block mb-20"
                      style={{ maxWidth: "64px" }}
                      alt=""
                    />
                    <h4>Wallet Issues</h4>
                    <p class="mt-10 text-center no-mb">
                      Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                      Natus sapiente mollitia nesciunt molestiae.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 no-pl no-pr">
                <div
                  class="tile-progress bg-accent"
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <div class="content">
                    <img
                      src="../data/icons/i4.png"
                      class="center-block mb-20"
                      style={{ maxWidth: "64px" }}
                      alt=""
                    />
                    <h4>Global Payments</h4>
                    <p class="mt-10 text-center no-mb">
                      Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                      Natus sapiente mollitia nesciunt molestiae.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 no-pl no-pr">
                <div
                  class="tile-progress bg-accent"
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <div class="content">
                    <img
                      src="../data/icons/i5.png"
                      class="center-block mb-20"
                      style={{ maxWidth: "64px" }}
                      alt=""
                    />
                    <h4>Ceramax Investment</h4>
                    <p class="mt-10 text-center no-mb">
                      Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                      Natus sapiente mollitia nesciunt molestiae.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 no-pl no-pr">
                <div
                  class="tile-progress bg-accent"
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                >
                  <div class="content">
                    <img
                      src="../data/icons/i6.png"
                      class="center-block mb-20"
                      style={{ maxWidth: "64px" }}
                      alt=""
                    />
                    <h4>Next Bouns Stage</h4>
                    <p class="mt-10 text-center no-mb">
                      Lorem ipsum dolor sit amet, conse ctetur adipisicing elit.
                      Natus sapiente mollitia nesciunt molestiae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Faqs />
    </div>
  );
};

export default HelpCenter;
