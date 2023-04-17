import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUrl } from "../../redux/apiRequest";
import "../componentHue24h/componentHue24h.scss"

import "./ComponentDiaDiem.scss"
const ComponentDiaDiem = ({cpDD}) =>{
  
  
    return(
        <div className="componentHue24h">
            <div className="cpH24hNav">
                <div className="leftNavi">ĐỊA ĐIỂM</div>
                <div className="rightNavi">
                    <Link >All</Link>
                    <Link>Viết về Huế</Link>
                    <Link>Bạn có biết?</Link>
                    <Link>Người Huế</Link>
                    <Link>Làng nghề Huế</Link>
                </div>
            </div>
            <div className="cpDiaDiemContain">
  {cpDD?.map(item => {
    if (item.catgeory !== "") {
      return (
        <div className='cpDiaDiem' key={item.id}>
          <div className='cpDuLichMainCover cpDiaDiemCover'>
            <img src={item.cover} alt='' />
          </div>
          <div className=''>
            <span className=' category cpDiaDiemCat'>{item.catgeory}</span>
           
            <Link to={`/SinglePage/${item.id}`}>
              <h3 className='' style={{fontWeight: "500", color:"black"}}>{item.title}</h3>
            </Link>
            <div style={{fontSize: "10px", padding: "5px 0px 15px 5px"}}>
              <span>{item.time}</span>
            </div>
            <h4 className='' style={{fontWeight: "300", color:"black"}}>{item.title}</h4>
           
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
export default ComponentDiaDiem