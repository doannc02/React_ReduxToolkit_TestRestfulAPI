import React from "react";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare, FaPinterestSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

import "./Right.scss";
import { useSelector } from "react-redux";
import { QuangCao2, QuangCao3 } from "../QuangCao/QuangCao";
const Right = () => {
  const leftCPP = useSelector((state) => state.img.admin.ad);
  return (
    <>
      <div className="containerRight">
        <>
          <QuangCao3 />
        </>
        <>
          <QuangCao2 />
        </>
        <>
          <QuangCao3 />
        </>
        <>
          <QuangCao3 />
        </>
        <div className="footerIcon">
          <div style={{ color: "#374595", float: "right", fontSize: "45px" }}>
            <GrFacebook />
          </div>
          <div style={{ color: "#488EC3" }}>
            <FaTwitterSquare />
          </div>
          <div className="insta" style={{ fontSize: "20px" }}>
            <CiInstagram />
          </div>
          <div style={{ color: "#BD081C", paddingLeft: "70px" }}>
            <FaPinterestSquare />
          </div>
        </div>
        <div className="titleRight">
          <h4>TIN NỔI BẬT</h4>
        </div>
        <div className="contentRightBot">
         
          <div className="RightComponentPage">
          
            {leftCPP?.map((item) => {
              if (item.id > 0) {
                return (
                    
                        <div className="cpRightPageBox" key={item.id}>
                    
                    <div className="cpRightPageBoxCover">
                      <img src={item.cover} alt="" />
                    </div>
                    <div className="rtt">
                      <Link to={`/SinglePage/${item.id}`}>
                        <h4
                          className=""
                          style={{ fontWeight: "700", color: "black" }}
                        >
                          {item.title}
                        </h4>
                      </Link>
                      <div
                        style={{
                          fontSize: "10px",
                          padding: "5px 0px 15px 5px",
                        }}
                      >
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                  
                );
              } else {
                return null;
              }
            })}
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Right;
