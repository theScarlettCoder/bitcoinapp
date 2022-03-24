import React from "react";

const Page404 = () => {
  return (
    <div className="pace-done" style={{ zoom: 1 }}>
      <div className="pace  pace-inactive">
        <div
          className="pace-progress"
          data-progress-text="100%"
          data-progress="99"
          style={{ transform: "translate3d(100%, 0px, 0px)" }}
        >
          <div className="pace-progress-inner"></div>
        </div>
        <div className="pace-activity"></div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <section className="box nobox ">
              <div className="content-body">
                <div className="row">
                  <div className="col-xs-12">
                    <h1 className="page_error_code text-primary">404</h1>
                    <h1 className="page_error_info">Oops! Page Not Found</h1>
                    <div className="row">
                      <div className="col-md-offset-3 col-sm-offset-3 col-xs-offset-2 col-xs-8 col-sm-6">
                        <form
                          //   action="javascript:;"
                          method="post"
                          className="page_error_search"
                        >
                          <div className="input-group transparent">
                            <span className="input-group-addon">
                              <i
                                className="fa fa-search icon-primary"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Try a new search"
                            />
                            <input type="submit" value="" />
                          </div>
                          <div className="text-center page_error_btn">
                            <a
                              className="btn btn-primary btn-lg"
                              href="index-dashboard.html"
                            >
                              <i
                                className="fa fa-location-arrow"
                                aria-hidden="true"
                              ></i>{" "}
                              &nbsp; Back to Home
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
