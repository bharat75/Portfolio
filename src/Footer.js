import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with ❤️ by <a href="#">Bharat Shubham</a> | &copy;{" "}
        {new Date().getFullYear()} All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
