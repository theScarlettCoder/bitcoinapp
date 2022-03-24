import React from "react";

const Recents = () => {
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
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o complete"></i> Deal
                        number 126515
                      </th>
                      <td>17.24AM</td>
                      <td>
                        <span className="status-complete">complete</span>
                      </td>
                      <td>
                        <i className="fa fa-plus complete normal"></i>
                        0.00113 BTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o pending"></i> Deal
                        number 123675
                      </th>
                      <td>18.14AM</td>
                      <td>
                        <span className="status-pending">pending</span>
                      </td>
                      <td>
                        <i className="fa fa-plus complete normal f-s-10"></i>
                        3.90244 LTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o pending"></i> Deal
                        number 126515
                      </th>
                      <td>20.25AM</td>
                      <td>
                        <span className="status-pending">pending</span>
                      </td>
                      <td>
                        <i className="fa fa-minus cancelled normal f-s-10"></i>
                        0.00121 LTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o cancelled"></i>
                        Deal number 159034
                      </th>
                      <td>21.24AM</td>
                      <td>
                        <span className="status-cancelled">cancelled</span>
                      </td>
                      <td>
                        <i className="fa fa-plus complete normal f-s-10"></i>
                        0.01231 BTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o complete"></i> Deal
                        number 136563
                      </th>
                      <td>21.50AM</td>
                      <td>
                        <span className="status-complete">complete</span>
                      </td>
                      <td>
                        <i className="fa fa-minus cancelled normal f-s-10"></i>
                        0.6673 DASH
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o complete"></i> Deal
                        number 177384
                      </th>
                      <td>21.59PM</td>
                      <td>
                        <span className="status-complete">complete</span>
                      </td>
                      <td>
                        <i className="fa fa-minus cancelled normal f-s-10"></i>
                        0.97231 BTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o cancelled"></i>
                        Deal number 173434
                      </th>
                      <td>22.11PM</td>
                      <td>
                        <span className="status-cancelled">cancelled</span>
                      </td>
                      <td>
                        <i className="fa fa-plus complete normal f-s-10"></i>
                        9.2323 LTC
                      </td>
                    </tr>
                    {/* <!-- Repeat --> */}
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o pending"></i> Deal
                        number 1788348
                      </th>
                      <td>22.34PM</td>
                      <td>
                        <span className="status-pending">pending</span>
                      </td>
                      <td>
                        <i className="fa fa-minus cancelled normal f-s-10"></i>
                        1.3433 DASH
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o complete"></i> Deal
                        number 189915
                      </th>
                      <td>22.54PM</td>
                      <td>
                        <span className="status-complete">complete</span>
                      </td>
                      <td>
                        <i className="fa fa-plus complete normal"></i>12.343 LTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o complete"></i> Deal
                        number 179993
                      </th>
                      <td>23.05PM</td>
                      <td>
                        <span className="status-complete">complete</span>
                      </td>
                      <td>
                        <i className="fa fa-plus complete normal f-s-10"></i>
                        0.23234 LTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o cancelled"></i>
                        Deal number 184563
                      </th>
                      <td>23.15PM</td>
                      <td>
                        <span className="status-cancelled">cancelled</span>
                      </td>
                      <td>
                        <i className="fa fa-minus cancelled normal f-s-10"></i>
                        1.4231 BTC
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fa fa-dot-circle-o pending"></i> Deal
                        number 186564
                      </th>
                      <td>23.50PM</td>
                      <td>
                        <span className="status-pending">pending</span>
                      </td>
                      <td>
                        <i className="fa fa-plus complete normal f-s-10"></i>
                        2.3430 DASH
                      </td>
                    </tr>
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
