import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AccessPages from "../AccessPages";
import Settings from "./Settings";
import Support from "./Support";
import Graphs from "./tradingView/Graphs";
import Graph from "./tradingView/trading-smallerComponents/Graph";

const SideBar = (open) => {
  return (
    <>
      <div className="page-sidebar fixedscroll">
        <div
          className="page-sidebar-wrapper ps-container"
          id="main-menu-wrapper"
          style={{ height: "1191px" }}
        >
          <ul className="wraplist" style={{ height: "auto" }}>
            <li className="menusection">Main</li>
            <li className="open">
              <Link to="/">
                <i className="fa fa-th-large" aria-hidden="true"></i>
                <span className="title">Dashboard</span>
              </Link>
            </li>
            <li className="">
              <Link to="/tradingView">
                <i className="fa fa-bullseye" aria-hidden="true"></i>
                <span className="title">Trading View</span>
              </Link>
            </li>

            <li className="">
              <Link to="/buy-and-sell">
                <i className="img">
                  <img
                    src="../data/icons/coins.png"
                    style={{ width: "16px" }}
                    alt=""
                  />
                </i>

                <span className="title">Buy &amp; Sell Crypto</span>
              </Link>
            </li>
            <li className="">
              <a href=".payment-gateways.html">
                <i className="fa fa-credit-card" aria-hidden="true"></i>
                <span className="title">Payment Gateways</span>
              </a>
            </li>

            <li className="">
              <Link to="/my-wallet">
                <i className="img">
                  <img
                    src="../data/icons/wallet-o.png"
                    style={{ width: "16px" }}
                    alt=""
                  />
                </i>
                <span className="title">My Wallet</span>
              </Link>
            </li>
            <li className="">
              <Link to="/security">
                <i className="fa fa-lock" aria-hidden="true"></i>
                <span className="title">Security</span>
              </Link>
            </li>

            {/* Settings Position */}
            <Settings />

            {/* Access Page position */}
            <AccessPages />

            {/* Support page position */}
            <Support />

            <li className="menusection">Applications</li>

            <li className="">
              {/* <a href="javascript:;"> DropDown */}
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span className="title">Mailbox</span>
              <span className="arrow "></span>
              <span className="label label-accent">4</span>
              {/* </a> */}
              <ul className="sub-menu">
                <li>
                  <a className="" href="./dashboard/mail-inbox.html">
                    Inbox
                  </a>
                </li>
                <li>
                  <a className="" href="./dashboard/mail-compose.html">
                    Compose
                  </a>
                </li>
                <li>
                  <a className="" href="mail-view.html">
                    View
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              {/* <Link to='/'> DropDpow */}
              <i className="fa fa-comments" aria-hidden="true"></i>
              <span className="title">Chat API</span>
              <span className="arrow "></span>
              {/* </Link> */}
              <ul className="sub-menu">
                <li>
                  <a className="" href="chat-api.html">
                    Chat API
                  </a>
                </li>
                <li>
                  <a className="" href="chat-windows.html">
                    Chat Windows
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div
            className="ps-scrollbar-x-rail"
            style={{ left: "0px", bottom: "3px" }}
          >
            <div
              className="ps-scrollbar-x"
              style={{ left: "0px", width: "0px" }}
            ></div>
          </div>
          <div
            className="ps-scrollbar-y-rail"
            style={{ top: "0px", right: "3px" }}
          >
            <div
              className="ps-scrollbar-y"
              style={{ top: "0px", height: "0px" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
