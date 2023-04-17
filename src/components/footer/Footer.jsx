import React from "react";
import {GrFacebook} from "react-icons/gr"
import {FaTwitterSquare, FaPinterestSquare} from "react-icons/fa"
import { CiInstagram } from "react-icons/ci";
import "./Footer.scss"
const Footer = () =>{

    return(<div className="footer">
    <div className="duongThang"></div>
    <div className="footerLogo">
        <img src="https://dulichhue.com.vn/wp-content/uploads/2018/12/logo_du-lich-hue.png"></img>
    </div>
    <div className="footerText">
    Giấy phép số 03/2017/GP- TTĐT cấp ngày 24/03/2017. Chịu trách nhiệm nội dung: Trần Duy Hòa. Đơn vị chủ quản : Công Ty TNHH MTV Truyền Thông Du Lịch Huế.
MST : 3301348910. VP : 22 Nguyễn Huệ - Huế
    </div>
    <div className="footerInfo">Contact us: <a className="info">info@dulichhue.com.vn</a></div>
    <div className="footerIcon">
        <div style={{color:"#374595", float:"right", fontSize:"45px"}}><GrFacebook /></div>
        <div style={{color:"#488EC3"}}><FaTwitterSquare/></div>
        <div className="insta" style={{ fontSize: "20px"}}><CiInstagram /></div>
        <div style={{color:"#BD081C", paddingLeft:"70px"}}><FaPinterestSquare/></div>
    </div>
    <div className="footerCopy">Copyright © 19-9-2010. Du Lịch Huế - HueTourism. Hotline : 0914242096 Mr Hòa</div>
</div>)
}
export default Footer


//"cover": "https://dulichhue.com.vn/wp-content/uploads/2023/02/nguoi-hue-an-cay-vi-sao1-480x320.png",