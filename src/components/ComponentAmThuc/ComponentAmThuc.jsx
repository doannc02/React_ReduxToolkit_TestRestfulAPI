import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ComponentAmThuc.scss"
import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUrlAmThuc } from "../../redux/apiRequest";



const ComponentAmThuc = () => {
const dispatch = useDispatch()
const data = useSelector(state => state.img.amThucImgs.amThuc)
  useEffect(() =>{
    getUrlAmThuc(dispatch)
    console.log(data);
  },[])
    return (
        <div className="componentHue24h">
        <div className="cpH24hNav">
            <div className="leftNavi">Ẩm thực</div>
            <div className="rightNavi">
                <Link >All</Link>
                <Link>Viết về Huế</Link>
                <Link>Bạn có biết?</Link>
                <Link>Người Huế</Link>
                <Link>Vẻ đẹp Huế</Link>
            </div>
        </div>
        <div className='containerAmThuc'>
          {data?.map(item => (
            <div className='boxx' key={item.id}>
              <div className='imgAmThuc'>
                <img src={item.cover} alt='' />
              </div>
              <div className='textAT'>
                <span className='category ca'>{item.catgeory}</span>
                <Link to={`/SinglePage/${item.id}`}>
                  <h1 className='titleBg'>{item.title}</h1>
                </Link>
                <div style={{color:"white"}} className='author flex'>
                  
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
</div>
        
        
  
      
    );
  };


 
export default ComponentAmThuc