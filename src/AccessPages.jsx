import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccessPages = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <li className="">
        <a href="#" onClick={toggle}>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <span className="title">Access Pages</span>
          <span className="arrow "></span>
        </a>
        {open && (
          <div className="sub-menu">
            <li>
              <Link to="/login">
                <li className="" href="#">
                  Login
                </li>
              </Link>
            </li>
            <li>
              <Link to="/registration">
                <li className="" href="#">
                  Registration
                </li>
              </Link>
            </li>
            <li>
              <Link to="/404">
                <li className="" href="#">
                  404
                </li>
              </Link>
            </li>
          </div>
        )}
      </li>
    </div>
  );
};

export default AccessPages;
