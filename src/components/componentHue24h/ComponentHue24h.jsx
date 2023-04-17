import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUrl } from "../../redux/apiRequest";
import "./componentHue24h.scss"
const ComponentHue24h = () =>{
  
   const cpH = useSelector(state => state.img.admin.ad)
   console.log(cpH);
    return(
        <div className="componentHue24h">
            <div className="cpH24hNav">
                <div className="leftNavi">HUẾ 24H</div>
                <div className="rightNavi">
                    <Link >All</Link>
                    <Link>Viết về Huế</Link>
                    <Link>Bạn có biết?</Link>
                    <Link>Người Huế</Link>
                    <Link>Vẻ đẹp Huế</Link>
                </div>
            </div>
            <div className="cpH24hMain">
  {cpH?.map(item => {
    if (item.catgeory === "Huế 24h") {
      return (
        <div className='cpH24hMainbox' key={item.id}>
          <div className='cpH24hMainCover'>
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
            <div>{item.title}</div>
           
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
export default ComponentHue24h