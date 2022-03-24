import React, { useState } from "react";
import { Link } from "react-router-dom";

const Support = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <li className="">
        <a href="#" onClick={toggle}>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <span className="title">Support</span>
          <span className="arrow "></span>
        </a>
        {open && (
          <div className="sub-menu">
            <li>
              <Link to="/faq">
                <li className="" href="#">
                  FAQ
                </li>
              </Link>
            </li>
            <li>
              <Link to="/help-center">
                <li className="" href="#">
                  Help Center
                </li>
              </Link>
            </li>
          </div>
        )}
      </li>
    </div>
  );
};

export default Support;
