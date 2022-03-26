import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <li className="">
        <a href="#" onClick={toggle}>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <span className="title">Chat API</span>
          <span className="arrow "></span>
        </a>
        {open && (
          <div className="sub-menu">
            <li>
              <Link to="/login">
                <li className="" href="#">
                  Chat API
                </li>
              </Link>
            </li>
            <li>
              <Link to="/registration">
                <li className="" href="#">
                  Chat Windows
                </li>
              </Link>
            </li>
          </div>
        )}
      </li>
    </div>
  );
};

export default Chat;
