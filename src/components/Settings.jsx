import React, { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <li className="">
        <a href="#" onClick={toggle}>
          <i className="fa fa-gear" aria-hidden="true"></i>
          <span className="title">Settings</span>
          <span className="arrow"></span>
        </a>
        {open && (
          <div className="sub-menu">
            <li>
              <Link to="/general-settings">
                <li className="" href="#">
                  General Settings
                </li>
              </Link>
            </li>
            <li>
              <Link to="/account-confirmation">
                <li className="" href="#">
                  Account Confirmation
                </li>
              </Link>
            </li>
          </div>
        )}
      </li>
    </div>
  );
};

export default Settings;
