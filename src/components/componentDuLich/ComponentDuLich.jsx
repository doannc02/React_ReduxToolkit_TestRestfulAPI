import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUrl } from "../../redux/apiRequest";
import "../componentHue24h/componentHue24h.scss"
import "./ComponentDuLich.scss"
const ComponentDuLich = ({dv,cpDL}) =>{
  
 
    return(
        <div className="componentHue24h">
            <div className="cpH24hNav">
                <div className="leftNavi">{dv === true ? "DỊCH VỤ" : "DU LỊCH"}
  </div>
                <div className="rightNavi">
                    <Link >All</Link>
                    <Link>Viết về Huế</Link>
                    <Link>Bạn có biết?</Link>
                    <Link>Người Huế</Link>
                    <Link>Vẻ đẹp Huế</Link>
                </div>
            </div>
            <div className="cpDuLich">
            {cpDL?.map(item => {
  if (item.id > 0) {
    return (
      <div className='cpDuLichBox' key={`cpDuLichBox_${item.id}`}>
        <div className='cpDuLichMainCover'>
          <img src={item.cover} alt='' />
        </div>
        <div className=''>
          <span className='cpH24hCat category'>{item.catgeory}</span>
         
          <Link to={`/SinglePage/${item.id}`}>
            <h2 className='' style={{fontWeight: "500", color:"black"}}>{item.title}</h2>
          </Link>
          <div style={{fontSize: "10px", padding: "5px 0px 15px 5px"}}>
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
        )
}
export default ComponentDuLich