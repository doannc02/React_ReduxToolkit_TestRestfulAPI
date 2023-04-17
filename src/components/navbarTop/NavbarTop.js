import React from "react";
import "./navbarTop.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { WiNightCloudy } from "react-icons/wi";
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiPinterestFill } from "react-icons/ri";

const NavbarTop = () => {
  return (
    <div className="navbarTop">
      <div className="navbarContainer">
        <div className="left-nav-item">
          <div className="item-left">
            <WiNightCloudy style={{ fontSize: "30px" }} />
            <span style={{ fontWeight: "500" }}>19.1</span>
          </div>
          <div className="item-left">
            <span style={{ fontWeight: "500" }}>Huế</span>
            <span> </span>
          </div>
          <div className="item-left">
            <span></span>
            <span style={{ fontWeight: "400" }}>14 tháng Ba, 2023</span>
          </div>
          <div className="item-left">
            <span
              style={{
                backgroundColor: "#00b0ff",
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "#ffffff",
                fontWeight: "500",
              }}
            >
              TIÊU ĐIỂM
            </span>
          </div>
          <div className="item md">
            <MdKeyboardArrowLeft style={{ fontSize: "20px" }} />
            <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
          </div>
          <div className="item-left">
            <div style={{ fontWeight: 600, fontSize: "13px" }}>
              13 Triều đại nhà Nguyễn
            </div>
          </div>
        </div>
        <div className="right-nav-top">
          <div className="item-top">
            <RiFacebookFill style={{ fontSize: "16px" }} />
          </div>
          <div className="item-top">
            <AiOutlineTwitter />
          </div>
          <div className="item-top">
            <CiInstagram />
          </div>
          <div className="item-top">
            <RiPinterestFill />
          </div>
          <div className="toLogin" >
            <Link to="/Login"><img src="https://upload.wikimedia.org/wikipedia/vi/3/3b/Logo_viethung.png"></img> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarTop;
