import React from 'react'

const HomePage = () => {
    return (
        <div className="wrapper main-wrapper row">

            <div className="col-xs-12">
                <div className="page-title">

                    <div className="pull-left">
                        <h1 className="title">Dashboard</h1>
                    </div>

                </div>
            </div>
            <div className="col-lg-12">
                <section className="box nobox marginBottom0">
                    <div className="content-body">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="r4_counter db_box has-gradient-to-right-bottom">
                                    <div className="icon-after cc BTC-alt"></div>
                                    <i className="pull-left cc BTC-alt icon-md icon-white mt-10"></i>
                                    <div className="stats">
                                        <h3 className="color-white mb-5">1.003747 BTC</h3>
                                        <span>Wallet BTC balance</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="r4_counter db_box">
                                    <div className="icon-after cc DASH-alt"></div>
                                    <i className="pull-left cc DASH-alt icon-md icon-primary mt-10"></i>
                                    <div className="stats">
                                        <h3 className="mb-5">5.19034 DASH</h3>
                                        <span>Wallet DASH balance</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12">
                                <div className="r4_counter db_box">
                                    <div className="icon-after cc LTC-alt"></div>
                                    <i className="pull-left cc LTC-alt icon-md icon-primary mt-10"></i>
                                    <div className="stats">
                                        <h3 className="mb-5">12.60349 LTC</h3>
                                        <span>Unconfiremed balance</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <div className="clearfix"></div>

            <div className="col-lg-8">
                <section className="box" style={{ overflow: "hidden" }}>
                    <header className="panel_header">
                        <h2 className="title pull-left">Balance Statistic</h2>
                        <div className="actions panel_actions pull-right">
                            <a className="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" aria-hidden="true"></a>
                            <a className="box_close fa fa-times" aria-hidden="true"></a>
                        </div>
                    </header>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <div id="demoarea-chart">
                                    {/* <div id="demoarea-container" style="width: 100%; height: 310px; text-align: center; margin: 0px auto; padding: 0px; position: relative;"><canvas className="flot-base" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1336px; height: 310px;" width="1068" height="248"></canvas><div className="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);"><div className="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px; display: block;"><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 45px; text-align: center;">02:00</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 114px; text-align: center;">02:10</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 184px; text-align: center;">02:20</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 254px; text-align: center;">02:30</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 324px; text-align: center;">02:40</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 393px; text-align: center;">02:50</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 463px; text-align: center;">03:00</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 533px; text-align: center;">03:10</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 603px; text-align: center;">03:20</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 672px; text-align: center;">03:30</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 742px; text-align: center;">03:40</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 812px; text-align: center;">03:50</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 882px; text-align: center;">04:00</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 952px; text-align: center;">04:10</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 1021px; text-align: center;">04:20</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 1091px; text-align: center;">04:30</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 1161px; text-align: center;">04:40</div><div className="flot-tick-label tickLabel" style="position: absolute; max-width: 66px; top: 286px; left: 1231px; text-align: center;">04:50</div></div><div className="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px; display: block;"><div className="flot-tick-label tickLabel" style="position: absolute; top: 270px; left: 15px; text-align: right;">0</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 216px; left: 7px; text-align: right;">50</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 162px; left: 1px; text-align: right;">100</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 108px; left: 1px; text-align: right;">150</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 54px; left: 1px; text-align: right;">200</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 1px; left: 1px; text-align: right;">250</div></div><div className="flot-y-axis flot-y2-axis yAxis y2Axis" style="position: absolute; inset: 0px; display: block;"><div className="flot-tick-label tickLabel" style="position: absolute; top: 270px; left: 1315px;">0</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 231px; left: 1315px;">100</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 193px; left: 1315px;">200</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 154px; left: 1315px;">300</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 116px; left: 1315px;">400</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 77px; left: 1315px;">500</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 39px; left: 1315px;">600</div><div className="flot-tick-label tickLabel" style="position: absolute; top: 1px; left: 1315px;">700</div></div></div><canvas className="flot-overlay" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1336px; height: 310px;" width="1068" height="248"></canvas><div className="legend"><div style="position: absolute; width: 88px; height: 45px; top: 17px; right: 36px; background-color: rgb(255, 255, 255); opacity: 0.85;"> </div><table style="position:absolute;top:17px;right:36px;;font-size:smaller;color:#545454"><tbody><tr><td className="legendColorBox"><div style="border:1px solid #ccc;padding:1px"><div style="width:4px;height:0;border:5px solid rgb(102,57,228);overflow:hidden"></div></div></td><td className="legendLabel">This month</td></tr><tr><td className="legendColorBox"><div style="border:1px solid #ccc;padding:1px"><div style="width:4px;height:0;border:5px solid rgb(102,57,228);overflow:hidden"></div></div></td><td className="legendLabel">Total balance</td></tr></tbody></table></div></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="col-lg-4">
                <section className="box ">
                    <header className="panel_header">
                        <h2 className="title pull-left">Live crypto prices</h2>
                        <div className="actions panel_actions pull-right">
                            <a className="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" aria-hidden="true"></a>
                            <a className="box_close fa fa-times" aria-hidden="true"></a>
                        </div>
                    </header>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-xs-12 mt-5">
                                {/* <script>
                                    baseUrl = "https://widgets.cryptocompare.com/";
                                    var scripts = document.getElementsByTagName("script");
                                    var embedder = scripts[scripts.length - 1];
                                    var cccTheme = {"General":{"background":"#121212","borderColor":"#000"},"Tabs":{"background":"#000","color":"#FFF","borderColor":"#333","activeBackground":"#333","activeColor":"#FFF"},"Row":{"color":"#FFF","borderColor":"#585858"},"Conversion":{"background":"#000","color":"#CCC"}};
                                    (function() {
                                    var appName = encodeURIComponent(window.location.hostname);
                                    if (appName == "") {
                                        appName = "local";
                                    }
                                    var s = document.createElement("script");
                                    s.type = "text/javascript";
                                    s.async = true;
                                    var theUrl = baseUrl + 'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,XRP,NEO,DASH&tsyms=USD,EUR,CNY,GBP';
                                    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
                                    embedder.parentNode.appendChild(s);
                                })();
                                </script><script type="text/javascript" async="" src="https://widgets.cryptocompare.com/serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,XRP,NEO,DASH&amp;tsyms=USD,EUR,CNY,GBP&amp;app=127.0.0.1"></script> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="clearfix"></div>

            <div className="col-lg-4">
                <section className="box has-border-left-3">
                    <header className="panel_header">
                        <h2 className="title pull-left">Transfer Coins</h2>
                        <div className="actions panel_actions pull-right">
                            <a className="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" aria-hidden="true"></a>
                            <a className="box_close fa fa-times" aria-hidden="true"></a>
                        </div>
                    </header>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="transfer-wraper">
                                    <div className="form-group no-mb">
                                        <label className="form-label">Amount</label>
                                        <span className="desc">minimum value "0.001 BTC"</span>

                                        <div className="input-group mb-10">
                                            <span className="input-group-addon">$</span>
                                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="enter amount" />
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-red dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                                    BTC <span className="caret"></span>
                                                </button>

                                                <ul className="dropdown-menu dropdown-red no-spacing">
                                                    <li><a href="#">LTC</a></li>
                                                    <li><a href="#">DASH</a></li>
                                                    <li><a href="#">Ripple</a></li>
                                                </ul>
                                            </div>

                                        </div>

                                        <label className="form-label">wallet address</label>
                                        <span className="desc"></span>

                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <span className="arrow"></span>
                                                <img src="/data/icons/wallet-o.png" alt="icon" />
                                            </span>
                                            <input type="text" className="form-control" placeholder="OxsD12F32xvW3deG5..." />
                                        </div>

                                        <button type="button" className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom" style={{ width: "100%" }}> Transfer Now</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="col-lg-4">
                <section className="box has-border-left-3">
                    <header className="panel_header">
                        <h2 className="title pull-left">Recent Transaction</h2>
                        <div className="actions panel_actions pull-right">
                            <a className="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" aria-hidden="true"></a>
                            <a className="box_close fa fa-times" aria-hidden="true"></a>
                        </div>
                    </header>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="transaction-wraper">
                                    <div className="transaction-info has-gradient-to-right-bottom">
                                        <img alt="" src="./data/profile/profile.jpg" className="img-responsive img-circle" />
                                        <strong className="color-white">1.23<span> LTC</span></strong>
                                    </div>
                                    <span className="transaction-opration"><i className="fa fa-arrow-right cancelled" aria-hidden="true"></i></span>
                                    <div className="transaction-info">
                                        <img alt="" src="./data/profile/profile-blog.jpg" className="img-responsive img-circle" />
                                        <strong><span>OxsD1..</span></strong>
                                    </div>

                                    <hr />

                                    <div className="transaction-info bg-gray">
                                        <img alt="" src="./data/profile/profile.jpg" className="img-responsive img-circle" />
                                        <strong>0.03<span> BTC</span></strong>
                                    </div>
                                    <span className="transaction-opration"><i className="fa fa-arrow-left complete" aria-hidden="true"></i></span>
                                    <div className="transaction-info">
                                        <img alt="" src="./data/profile/profile-crm.jpg" className="img-responsive img-circle" />
                                        <strong><span>OxsD1..</span></strong>
                                    </div>

                                    <hr />

                                    <div className="col-xs-12">
                                        <a href="#" className="all-transaction text-center block"><strong><i className="fa fa-plus" aria-hidden="true"></i> View all</strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="col-lg-4">
                <section className="box has-border-left-3">
                    <header className="panel_header">
                        <h2 className="title pull-left">Wallet addresses</h2>
                        <div className="actions panel_actions pull-right">
                            <a className="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" aria-hidden="true"></a>
                            <a className="box_close fa fa-times" aria-hidden="true"></a>
                        </div>
                    </header>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="transfer-wraper">
                                    <div className="form-group no-mb">

                                        <label className="form-label">Bitcoin wallet address</label>
                                        <div className="input-group mb-10">
                                            <span className="input-group-addon has-gradient-to-right-bottom">
                                                <i className="cc BTC-alt icon-white"></i>
                                            </span>
                                            <p className="form-control-static with-border">OxsD12F32xvW3deG5...</p>
                                            <a href="#" className="input-group-addon" data-color-className="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="copy" data-placement="top"><i className="fa fa-copy text-dark" aria-hidden="true"></i></a>
                                        </div>

                                        <label className="form-label">Litecoin wallet address</label>
                                        <div className="input-group">
                                            <span className="input-group-addon has-gradient-to-right-bottom">
                                                <i className="cc LTC-alt icon-white"></i>
                                            </span>
                                            <p className="form-control-static with-border">OxsD12F32xvW3deG5...</p>
                                            <a href="#" className="input-group-addon" data-color-className="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="copy" data-placement="top"><i className="fa fa-copy text-dark" aria-hidden="true"></i></a>
                                        </div>

                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom" style={{ width: "100%" }}>View all</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom" style={{ width: "100%" }}>Settings</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="clearfix"></div>

            {/* <div className="col-lg-4">
                <section className="box ">
                    <header className="panel_header">
                        <h2 className="title pull-left">Safe deals</h2>
                        <div className="actions panel_actions pull-right">
                            <a className="box_toggle fa fa-chevron-down"></a>
                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings"></a>
                            <a className="box_close fa fa-times"></a>
                        </div>
                    </header>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <div id="morris_donut_graph"></div>
                            </div>
                            <div className="col-xs-12">
                                <div className="statistics-wraper">
                                    <div className="statistics-info">
                                        <h3 className="mb"> 5.6307173 BTC</h3>
                                        <span><i className="fa fa-dot-circle-o active"></i> 6 active deals</span>
                                    </div>
                                    <div className="statistics-info no-pb">
                                        <h3 className="mb"> 16.453671 BTC</h3>
                                        <span><i className="fa fa-dot-circle-o"></i> 20 unconfirmed deals</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}

            <div className="col-lg-12">
                <section className="box" style={{ borderLeft: '3px solid #6639E4' }}>
                    <header className="panel_header">
                        <h2 className="title pull-left">Recent trading activities</h2>
                        <div className="actions panel_actions pull-right">
                            <a className="box_toggle fa fa-chevron-down" aria-hidden="true"></a>
                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" aria-hidden="true"></a>
                            <a className="box_close fa fa-times" aria-hidden="true"></a>
                        </div>
                    </header>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-xs-12">

                                <div className="table-responsive" data-pattern="priority-columns">
                                    <table id="tech-companies-1" className="table table-small-font no-mb table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Deal ID Number</th>
                                                <th data-priority="1">Trade Time</th>
                                                <th data-priority="3">Status</th>
                                                <th data-priority="1">Last Trade</th>
                                            </tr></thead>
                                        <tbody>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o complete" aria-hidden="true"></i> Deal number 126515</th>
                                                <td>17.24AM</td>
                                                <td><span className="status-complete">complete</span></td>
                                                <td><i className="fa fa-plus complete normal" aria-hidden="true"></i>0.00113 BTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o pending" aria-hidden="true"></i> Deal number 123675</th>
                                                <td>18.14AM</td>
                                                <td><span className="status-pending">pending</span></td>
                                                <td><i className="fa fa-plus complete normal f-s-10" aria-hidden="true"></i>3.90244 LTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o pending" aria-hidden="true"></i> Deal number 126515</th>
                                                <td>20.25AM</td>
                                                <td><span className="status-pending">pending</span></td>
                                                <td><i className="fa fa-minus cancelled normal f-s-10" aria-hidden="true"></i>0.00121 LTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o cancelled" aria-hidden="true"></i> Deal number 159034</th>
                                                <td>21.24AM</td>
                                                <td><span className="status-cancelled">cancelled</span></td>
                                                <td><i className="fa fa-plus complete normal f-s-10" aria-hidden="true"></i>0.01231 BTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o complete" aria-hidden="true"></i> Deal number 136563</th>
                                                <td>21.50AM</td>
                                                <td><span className="status-complete">complete</span></td>
                                                <td><i className="fa fa-minus cancelled normal f-s-10" aria-hidden="true"></i>0.6673 DASH</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o complete" aria-hidden="true"></i> Deal number 177384</th>
                                                <td>21.59PM</td>
                                                <td><span className="status-complete">complete</span></td>
                                                <td><i className="fa fa-minus cancelled normal f-s-10" aria-hidden="true"></i>0.97231 BTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o cancelled" aria-hidden="true"></i> Deal number 173434</th>
                                                <td>22.11PM</td>
                                                <td><span className="status-cancelled">cancelled</span></td>
                                                <td><i className="fa fa-plus complete normal f-s-10" aria-hidden="true"></i>9.2323 LTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o pending" aria-hidden="true"></i> Deal number 1788348</th>
                                                <td>22.34PM</td>
                                                <td><span className="status-pending">pending</span></td>
                                                <td><i className="fa fa-minus cancelled normal f-s-10" aria-hidden="true"></i>1.3433 DASH</td>
                                            </tr><tr>
                                                <th><i className="fa fa-dot-circle-o complete" aria-hidden="true"></i> Deal number 189915</th>
                                                <td>22.54PM</td>
                                                <td><span className="status-complete">complete</span></td>
                                                <td><i className="fa fa-plus complete normal" aria-hidden="true"></i>12.343 LTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o complete" aria-hidden="true"></i> Deal number 179993</th>
                                                <td>23.05PM</td>
                                                <td><span className="status-complete">complete</span></td>
                                                <td><i className="fa fa-plus complete normal f-s-10" aria-hidden="true"></i>0.23234 LTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o cancelled" aria-hidden="true"></i> Deal number 184563</th>
                                                <td>23.15PM</td>
                                                <td><span className="status-cancelled">cancelled</span></td>
                                                <td><i className="fa fa-minus cancelled normal f-s-10" aria-hidden="true"></i>1.4231 BTC</td>
                                            </tr>
                                            <tr>
                                                <th><i className="fa fa-dot-circle-o pending" aria-hidden="true"></i> Deal number 186564</th>
                                                <td>23.50PM</td>
                                                <td><span className="status-pending">pending</span></td>
                                                <td><i className="fa fa-plus complete normal f-s-10" aria-hidden="true"></i>2.3430 DASH</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="clearfix"></div>
        </div>
    )
}

export default HomePage