import React from "react";
import "./style.scss";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">© Eurasia Group 2022</div>
      <div className="links">
        <div className="link-wrapper">
          <FacebookIcon width={14} height={14} />
        </div>
        <div className="link-wrapper">
          <InstagramIcon width={14} height={14} />
        </div>

        <div className="link-wrapper">
          <YoutubeIcon width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
