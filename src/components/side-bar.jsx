import React from 'react'

const SideBar = () => {
    return (
        <div className="page-sidebar fixedscroll">
            <div className="page-sidebar-wrapper ps-container" id="main-menu-wrapper" style={{ height: '1191px' }}>


                <ul className="wraplist" style={{ height: 'auto' }}>
                    <li className="menusection">Main</li>
                    <li className="open">
                        <a href="./index.html">
                            <i className="fa fa-th-large" aria-hidden="true"></i>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="./dashboard/index-trading-view.html">
                            <i className="fa fa-bullseye" aria-hidden="true"></i>
                            <span className="title">Trading View</span>
                        </a>
                    </li>

                    <li className="">
                        <a href="./dashboard/buy-and-sell.html">
                            <i className="img">
                                <img src="../data/icons/coins.png" style={{ width: "16px" }} alt="" />
                            </i>

                            <span className="title">Buy &amp; Sell Crypto</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="./dashboard/payment-gateways.html">
                            <i className="fa fa-credit-card" aria-hidden="true"></i>
                            <span className="title">Payment Gateways</span>
                        </a>
                    </li>

                    <li className="">
                        <a href="./dashboard/my-wallet.html">
                            <i className="img"><img src="../data/icons/wallet-o.png" style={{ width: "16px" }} alt="" /></i>
                            <span className="title">My Wallet</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="./dashboard/security.html">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <span className="title">Security</span>
                        </a>
                    </li>

                    <li className="">
                        <a href="javascript:;">
                            <i className="fa fa-gear" aria-hidden="true"></i>
                            <span className="title">Settings</span>
                            <span className="arrow "></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a className="" href="./dashboard/settings.html">General Settings</a>
                            </li>
                            <li>
                                <a className="" href="./dashboard/account-confirmation.html">Account Confirmation</a>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="javascript:;">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <span className="title">Access Pages</span>
                            <span className="arrow "></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a className="" href="./dashboard/ui-login.html">Login</a>
                            </li>
                            <li>
                                <a className="" href="./dashboard/ui-register.html">Registration</a>
                            </li>
                            <li>
                                <a className="" href="./dashboard/ui-404.html">404</a>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="javascript:;">
                            <i className="fa fa-question-circle" aria-hidden="true"></i>
                            <span className="title">Support</span>
                            <span className="arrow "></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a className="" href="./dashboard/ui-faq.html">FAQ</a>
                            </li>
                            <li>
                                <a className="" href="./dashboard/ui-support.html">Help center</a>
                            </li>
                        </ul>
                    </li>

                    <li className="menusection">Applications</li>

                    <li className="">
                        <a href="javascript:;">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span className="title">Mailbox</span>
                            <span className="arrow "></span><span className="label label-accent">4</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a className="" href="./dashboard/mail-inbox.html">Inbox</a>
                            </li>
                            <li>
                                <a className="" href="./dashboard/mail-compose.html">Compose</a>
                            </li>
                            <li>
                                <a className="" href="mail-view.html">View</a>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="javascript:;">
                            <i className="fa fa-comments" aria-hidden="true"></i>
                            <span className="title">Chat API</span>
                            <span className="arrow "></span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a className="" href="chat-api.html">Chat API</a>
                            </li>
                            <li>
                                <a className="" href="chat-windows.html">Chat Windows</a>
                            </li>
                        </ul>
                    </li>




                </ul>
                <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "3px" }}>
                    <div className="ps-scrollbar-x" style={{ left: "0px", width: "0px" }}>
                    </div></div><div className="ps-scrollbar-y-rail" style={{ top: "0px", right: "3px" }}>
                    <div className="ps-scrollbar-y" style={{ top: "0px", height: "0px" }}>
                    </div></div></div >


        </div >
    )
}

export default SideBar