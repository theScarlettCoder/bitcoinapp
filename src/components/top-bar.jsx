/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function TopBar() {
  return (
    <div className="page-topbar">
      <div className="logo-area">
      </div>
      <div className="quick-area">
        <div className="pull-left">
          <ul className="info-menu left-links list-inline list-unstyled">
            <li className="sidebar-toggle-wrap">
              <a href="#" data-toggle="sidebar" className="sidebar_toggle">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </a>
            </li>
            <li className="message-toggle-wrapper showopacity">
              <a href="#" data-toggle="dropdown" className="toggle">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span className="badge badge-accent">7</span>
              </a>
              <ul className="dropdown-menu messages animated fadeIn">

                <li className="list ps-container">

                  <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                    <li className="unread status-available">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-1.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>y.k</strong>
                            <span className="time small">- 15 mins ago</span>
                            <span className="profile-status available pull-right"></span>
                          </span>
                          <span className="desc small">
                            check your slack.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" status-away">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-2.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>derek</strong>
                            <span className="time small">- 45 mins ago</span>
                            <span className="profile-status away pull-right"></span>
                          </span>
                          <span className="desc small">
                            check your linkedin.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" status-busy">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-3.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>Eric</strong>
                            <span className="time small">- 1 hour ago</span>
                            <span className="profile-status busy pull-right"></span>
                          </span>
                          <span className="desc small">
                            check your facebook.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" status-offline">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-4.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>Carri Busey</strong>
                            <span className="time small">- 5 hours ago</span>
                            <span className="profile-status offline pull-right"></span>
                          </span>
                          <span className="desc small">
                            Lorem ipsum dolor sit elit fugiat molest.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" status-offline">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-1.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>Melissa Dock</strong>
                            <span className="time small">- Yesterday</span>
                            <span className="profile-status offline pull-right"></span>
                          </span>
                          <span className="desc small">
                            Lorem ipsum dolor sit elit fugiat molest.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" status-available">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-1.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>Verdell Rea</strong>
                            <span className="time small">- 14th Mar</span>
                            <span className="profile-status available pull-right"></span>
                          </span>
                          <span className="desc small">
                            Lorem ipsum dolor sit elit fugiat molest.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" status-busy">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-2.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>Linette Lheureux</strong>
                            <span className="time small">- 16th Mar</span>
                            <span className="profile-status busy pull-right"></span>
                          </span>
                          <span className="desc small">
                            Lorem ipsum dolor sit elit fugiat molest.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" status-away">
                      <a href="javascript:;">
                        <div className="user-img">
                          <img src="/data/profile/avatar-3.png" alt="user-image" className="img-circle img-inline" />
                        </div>
                        <div>
                          <span className="name">
                            <strong>Araceli Boatright</strong>
                            <span className="time small">- 16th Mar</span>
                            <span className="profile-status away pull-right"></span>
                          </span>
                          <span className="desc small">
                            Lorem ipsum dolor sit elit fugiat molest.
                          </span>
                        </div>
                      </a>
                    </li>

                  </ul>

                  <div className="ps-scrollbar-x-rail"
                    style={{ left: '0px', bottom: '3px' }}>
                    <div className="ps-scrollbar-x" style={{ left: '0px', width: '0px' }}>
                    </div>
                  </div>
                  <div className="ps - scrollbar - y - rail" style={{ top: '0px', right: '3px' }}>
                    <div className="ps-scrollbar-y" style={{ top: '0px', height: '0px' }}>
                    </div>
                  </div>
                </li>

                <li className="external">
                  <a href="javascript:;">
                    <span>Read All Messages</span>
                  </a>
                </li>
              </ul>

            </li>
            <li className="notify-toggle-wrapper showopacity">
              <a href="#" data-toggle="dropdown" className="toggle">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <span className="badge badge-accent">3</span>
              </a>
              <ul className="dropdown-menu notifications animated fadeIn">
                <li className="total">
                  <span className="small">
                    You have <strong>3</strong> new notifications.
                    <a href="javascript:;" className="pull-right">Mark all as Read</a>
                  </span>
                </li>
                <li className="list ps-container">

                  <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                    <li className="unread available">
                      <a href="javascript:;">
                        <div className="notice-icon">
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div>
                          <span className="name">
                            <strong>Successful transaction of 0.01 BTC</strong>
                            <span className="time small">15 mins ago</span>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="unread away">
                      <a href="javascript:;">
                        <div className="notice-icon">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                        <div>
                          <span className="name">
                            <strong>4 of Pending Transactions!</strong>
                            <span className="time small">45 mins ago</span>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className=" busy">
                      <a href="javascript:;">
                        <div className="notice-icon">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                        <div>
                          <span className="name">
                            <strong>Cancelled Order of 200 ICO</strong>
                            <span className="time small">1 hour ago</span>
                          </span>
                        </div>
                      </a>
                    </li>

                    <li className=" available">
                      <a href="javascript:;">
                        <div className="notice-icon">
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div>
                          <span className="name">
                            <strong>Great Speed Notify of 1.34 LTC</strong>
                            <span className="time small">14th Mar</span>
                          </span>
                        </div>
                      </a>
                    </li>

                  </ul>

                  <div className="ps-scrollbar-x-rail"
                    style={{ left: '0px', bottom: '3px' }}>
                    <div className="ps-scrollbar-x" style={{ left: '0px', width: '0px' }}>
                    </div>
                  </div>
                  <div className="ps - scrollbar - y - rail" style={{ top: '0px', right: '3px' }}>
                    <div className="ps-scrollbar-y" style={{ top: '0px', height: '0px' }}>
                    </div>
                  </div>
                </li>

                <li className="external">
                  <a href="javascript:;">
                    <span>Read All Notifications</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="hidden-sm hidden-xs searchform showopacity">
              <form action="#" method="post">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                  <input type="text" className="form-control animated fadeIn" placeholder="Search &amp; Enter" />
                </div>
                <input type="submit" value="" />
              </form>
            </li>
          </ul>
        </div>
        <div className="pull-right">
          <ul className="info-menu right-links list-inline list-unstyled">
            <li className="profile showopacity">
              <a href="#" data-toggle="dropdown" className="toggle">
                <img src="/data/profile/profile.jpg" alt="user-image" className="img-circle img-inline" />
                <span>Smith Wright <i className="fa fa-angle-down" aria-hidden="true"></i></span>
              </a>
              <ul className="dropdown-menu profile animated fadeIn">
                <li>
                  <a href="account-confirmation.html">
                    <i className="fa fa-wrench" aria-hidden="true"></i> Settings
                  </a>
                </li>
                <li>
                  <a href="ui-profile.html">
                    <i className="fa fa-user" aria-hidden="true"></i> Profile
                  </a>
                </li>
                <li>
                  <a href="ui-support.html">
                    <i className="fa fa-info" aria-hidden="true"></i> Help
                  </a>
                </li>
                <li className="last">
                  <a href="ui-login.html">
                    <i className="fa fa-lock" aria-hidden="true"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
            <li className="chat-toggle-wrapper">
              <a href="#" data-toggle="chatbar" className="toggle_chat">
                <i className="fa fa-comments" aria-hidden="true"></i>
                <span className="badge badge-accent">9</span>
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div >

    </div >)
}
