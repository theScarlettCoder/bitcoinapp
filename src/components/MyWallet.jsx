import React from "react";

const MyWallet = () => {
  const coins = [
    {
      id: 1,
      walletHeader: `Bitcoin wallet`,
      walletName: "Bitcoin",
      walletAddress: "OxsD12F32xvW3deG5..",
      usdEquivalent: "12,734 USD",
      sellingAmount: "54,634",
      buyingAmount: "534,263",
      coinBalance: "1.5238237 BTC",
      balanceUsd: "15,238,237 USD",
    },
    {
      id: 2,
      walletHeader: `Litecoin wallet`,
      walletName: "Litecoin",
      walletAddress: "OxsD12F32xvW3deG5..",
      usdEquivalent: "734 USD",
      sellingAmount: "54,634",
      buyingAmount: "534,263",
      coinBalance: "1.5238237 BTC",
      balanceUsd: "15,238,237 USD",
    },
    {
      id: 3,
      walletHeader: `Ripple wallet`,
      walletName: "Ripple",
      walletAddress: "OxsD12F32xvW3deG5..",
      usdEquivalent: "34 USD",
      sellingAmount: "54,634",
      buyingAmount: "534,263",
      coinBalance: "1.5238237 BTC",
      balanceUsd: "15,238,237 USD",
    },
    {
      id: 4,
      walletHeader: `Dashcoin wallet`,
      walletName: "Dashcoin",
      walletAddress: "OxsD12F32xvW3deG5..",
      usdEquivalent: "12,734 USD",
      sellingAmount: "54,634",
      buyingAmount: "534,263",
      coinBalance: "1.5238237 BTC",
      balanceUsd: "15,238,237 USD",
    },
    {
      id: 5,
      walletHeader: `Dogecoin wallet`,
      walletName: "Dogecoin",
      walletAddress: "OxsD12F32xvW3deG5..",
      usdEquivalent: "12,734 USD",
      sellingAmount: "54,634",
      buyingAmount: "534,263",
      coinBalance: "1.5238237 BTC",
      balanceUsd: "15,238,237 USD",
    },
    {
      id: 6,
      walletHeader: `Ethereum wallet`,
      walletName: "Ethereum",
      walletAddress: "OxsD12F32xvW3deG5..",
      usdEquivalent: "12,734 USD",
      sellingAmount: "54,634",
      buyingAmount: "534,263",
      coinBalance: "1.5238237 BTC",
      balanceUsd: "15,238,237 USD",
    },
  ];

  return (
    <div className="wrapper main-wrapper row">
      <div className="col-xs-12">
        <div className="page-title">
          <div className="pull-left">
            {/* <!-- PAGE HEADING TAG - START --> */}
            <h1 className="title">My Wallet</h1>
            {/* <!-- PAGE HEADING TAG - END --> */}
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
            {/* <!-- End .row --> */}
          </div>
        </section>
      </div>

      {coins.map((coin) => (
        <div className="col-lg-4">
          <section className="box has-border-left-3">
            <header className="panel_header">
              <h2 className="title pull-left"> {coin.walletHeader} </h2>
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
                    <div className="transfer-wraper">
                      <div className="crypto-icon">
                        <i className="cc BTC color-primary"></i>
                      </div>
                      <strong className="mb-20">{coin.walletName}</strong>
                      <div className="form-group Ceramax no-mb">
                        <label className="form-label mt-10">
                          wallet address
                        </label>
                        <span className="desc"></span>

                        <div className="input-group mb-10">
                          <span className="input-group-addon has-gradient-to-right-bottom">
                            <i className="cc BTC-alt icon-white"></i>
                          </span>
                          <p className="form-control-static with-border">
                            {coin.walletAddress}
                          </p>
                          <a
                            href="#"
                            className="input-group-addon"
                            data-color-className="primary"
                            data-animate=" animated fadeIn"
                            data-toggle="tooltip"
                            data-original-title="copy"
                            data-placement="top"
                          >
                            <i
                              className="fa fa-copy text-dark"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>

                        <span className="desc">1 BTC</span>
                        <label className="form-label">
                          {" "}
                          = {coin.usdEquivalent} USD
                        </label>
                        <br />

                        <span className="desc">Total selling amount</span>
                        <label className="form-label">
                          {coin.sellingAmount} $
                        </label>
                        <br />

                        <span className="desc">Total buying buy</span>
                        <label className="form-label">
                          {coin.buyingAmount} $
                        </label>
                        <br />

                        <div className="mt-10 balance">
                          <strong className="form-label bold">
                            Balance :{" "}
                          </strong>
                          <span className="desc color-primary f-s-14">
                            {coin.coinBalance}
                          </span>
                        </div>
                        <div className="balance bg-white">
                          <strong className="form-label bold">
                            Balance in USD:{" "}
                          </strong>
                          <span className="desc color-primary f-s-14">
                            {coin.balanceUsd}
                          </span>
                        </div>

                        <div className="col-sm-6 no-pl">
                          <a
                            href="buy-and-sell.html"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Withdraw
                          </a>
                        </div>
                        <div className="col-sm-6 no-pr">
                          <a
                            href="buy-and-sell.html"
                            className="btn btn-primary btn-lg mt-20 has-gradient-to-right-bottom"
                            style={{ width: "100%" }}
                          >
                            Deposit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <div className="clearfix"></div>

      <div className="col-lg-8">
        <section className="box has-border-left-3">
          <header className="panel_header">
            <h2 className="title pull-left">Balance Statistics</h2>
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
                <div className="chart-container">
                  <div
                    className="chart has-fixed-height"
                    style={{ height: "200px" }}
                    id="page_views_today_bar"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="col-lg-4">
        <section className="box has-border-left-3">
          <header className="panel_header">
            <h2 className="title pull-left">Add new wallet</h2>
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
                    style={{ padding: "48.5px 20px" }}
                  >
                    <div className="">
                      <i
                        className="fa fa-plus has-gradient-to-right-bottom icon-sm icon-rounded inviewport visible "
                        style={{
                          width: "50px",
                          height: "50px",
                          lineHeight: "25px",
                        }}
                        aria-hidden="true"
                      ></i>
                      <a href="#myModal" data-toggle="modal">
                        <h4 className="no-mb mt-30">Create new address</h4>
                      </a>
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
                          <h4 className="modal-title">Create New Wallet</h4>
                        </div>
                        <div className="modal-body text-left">
                          <form>
                            <div className="form-group">
                              <label for="modalname1" className="form-label">
                                Coin Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="modalname1"
                                placeholder="Enter crypto coin name"
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Wallet address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="modalwallet1"
                                placeholder="Enter wallet address"
                              />
                            </div>
                            <div className="form-group">
                              <label for="modalfile3" className="form-label">
                                Upload your private key
                              </label>
                              <input type="file" id="modalfile3" />
                              <span className="help-block">
                                This is important for verification purposes.
                              </span>
                            </div>

                            <button type="submit" className="btn btn-primary">
                              Add Address
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
    </div>
  );
};

export default MyWallet;
