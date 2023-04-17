import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../Right/Right.scss"
import "./Category.scss";
import Left from "../Left/Left";
import Right from "../Right/Right";
import LeftComponentPage from "../../components/LeftComponetPage/LeftComponentPage";
import { QuangCao1 } from "../QuangCao/QuangCao";
import Footer from "../../components/footer/Footer";

const Category = () => {
  const dt = useSelector((state) => state.img?.admin.ad);
  const dt2 = useSelector((state) => state.img?.amThucImgs.amThuc);
  const dt3 = useSelector((state) => state.img?.diaDiemImgs.diadiem);
    const titl = useParams()
    const [title, setTitle] =useState(titl)
    console.log(titl, "tt");
  const renderItems = (items) =>
    items?.slice(0, 5)?.map((item) => (
      <div className="cpRightPageBox" key={item.id}>
        <div className="cpRightPageBoxCover">
          <img src={item.cover} alt="" />
        </div>
        <div className="rtt">
          <Link to={`/SinglePage/${item.id}`}>
            <div style={{width:"80px", paddingBottom: "5px"}} className="category">{item.catgeory}</div>
            <h4
              className=""
              style={{width:"300px", fontWeight: "700", color: "black", paddingTop: "10px" }}
            >
              {item.title}
            </h4>
          </Link>
          <div
            style={{
              fontSize: "10px",
              padding: "30px 0px 25px 5px",
            }}
          >
            <span >{item.time}</span>
            <p style={{width:"250px", paddingTop: "20px"}}>{item.title}</p>
          </div>
          
        </div>
      </div>
    ));

  return (
    <form styte={{height: "900px"}}>
      <div   className="home">
        <div className="header">
          <div style={{width:"700px", paddingLeft:"400px"}} className="imgContainer">
            <div style={{fontWeight: "400",fontSize: "13px", paddingTop: "10px",paddingBottom: "10px"}}  className="tiede">Home {">"} {title.titl==="Hue24h" ? ("Huế 24h"): title.titl === "Amthuc" ? ("Ẩm thực") : ("Địa Điểm Huế") }</div>
            <div style={{fontWeight: "700",fontSize: "24px", paddingBottom: "10px"}}>Category: {title.titl==="Hue24h" ? ("Huế 24h"): title.titl === "Amthuc" ? ("Ẩm thực") : ("Địa Điểm Huế") }</div>
          </div>
        </div>
        <div  className="containerMain">
          <div className="mainTop">
            <div className="containerMainLeft">
                <div style={{borderLeft:"black 4px solid", height: "40px", padding: "8px 0 0 10px", fontWeight: "600",width:"305px", backgroundColor: "#eee"}}>TIN MỚI ĐĂNG</div>
                <LeftComponentPage leftCPP={dt}/></div>
            <div className="containerMainCenterr">
              {title.titl === "Hue24h" ? (
                
                renderItems(dt)?.map((item) => item)
              ) : title.titl === "Amthuc" ? (
                renderItems(dt2)?.map((item) => item)
              ) : (
                renderItems(dt3)?.map((item) => item)
              )}
            </div>
            <div className="containerMainRight">
            <div style={{borderLeft:"black 4px solid", height: "40px", padding: "8px 0 0 10px", fontWeight: "600",width:"305px", backgroundColor: "#eee"}}>TIN NỔI BẬT</div>
                <LeftComponentPage leftCPP={dt3}/>
        
           
            </div>
          </div>
          <div className="mainBottom">
           
          </div>
        </div>
        <div style={{paddingTop: "1330px"}}> <Footer/></div>
      </div>
    </form>
  );
};

export default Category;
