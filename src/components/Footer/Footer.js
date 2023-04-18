import React, { useEffect } from "react";

import { SiYourtraveldottv } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="secContainer container grid">
          <div className="logoDiv">
            <div className="footerLogo">
              <a href="#" className="logo flex">
                <h1 className="flex">
                  <SiYourtraveldottv className="icon" />
                  Safar
                </h1>
              </a>
            </div>
            <div className="socials flex">
              <ImFacebook className="icon"></ImFacebook>
              <BsTwitter className="icon"></BsTwitter>
              <AiFillInstagram className="icon"></AiFillInstagram>
            </div>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>

            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Explore</a>
            </li>

            <li>
              <a href="#">Travel & Condition</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Helpful Links</span>

            <li>
              <a href="#">Destination</a>
            </li>

            <li>
              <a href="#">Support</a>
            </li>

            <li>
              <a href="#">Travel </a>
            </li>

            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Contact Us</span>

            <span className="phone">+91 9977859801</span>
            <span className="email">safarOfficial@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
