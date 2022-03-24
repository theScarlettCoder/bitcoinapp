import React from "react";
import Faqs from "./Faqs";

const Faq = () => {
  return (
    <div className="wrapper main-wrapper row">
      <div className="col-xs-12">
        <div className="page-title">
          <div className="pull-left">
            {/* <!-- PAGE HEADING TAG - START --> */}
            <h1 className="title">FAQ</h1>
            {/* <!-- PAGE HEADING TAG - END --> */}
          </div>

          <div className="pull-right hidden-xs">
            <ol className="breadcrumb">
              <li>
                <a href="index-dashboard.html">
                  <i className="fa fa-home" aria-hidden="true"></i>Home
                </a>
              </li>
              <li>
                <a href="ui-faq.html">Support</a>
              </li>
              <li className="active">
                <strong>FAQ</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <Faqs />
    </div>
  );
};

export default Faq;
