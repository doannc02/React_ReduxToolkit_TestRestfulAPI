import React from "react";
import { useSelector } from "react-redux";
import {BsBookmarkFill } from "react-icons/bs"
import "./mainBottom.scss"
const MainBottom = () => {
    const dt = useSelector(state => state.img.admin.ad);
    return (
      <div className="MainBottomHome">
        <div className="duongthang"></div>
        <div className="titleMBH">
            
          <BsBookmarkFill /> <span>CÓ THỂ BẠN QUAN TÂM !</span>
        </div>
        <div className="contentMBTH">
          {dt?.map((item,index) => (
           <div className="contentBoxx" key={index}>
             <div className="category">{item.catgeory}</div>
            <div  className="img">
              <img src={item.cover} alt={item.title} />
            </div>
            <div className="title">
                <div className="ttl">{item.title}</div>
                <div className="ttt">{item.time}</div>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default MainBottom