import React from "react";
import { useSelector } from "react-redux";
import "./ComponentRelated.scss"

const ComponentRelated = () => {
    const dt = useSelector(state => state.img.amThucImgs?.amThuc)

    return (
        <div className="cpRe">
            <div className="Tieude">
                <p>RELATED POSTS</p>
            </div>
            <div className="Related">
  {dt?.slice(0, 3).map((data) => {
    return (
      <div className="box"> 
        <img src={data.cover}/>
        <p>{data.title}</p>
      </div>
    )
  })}
</div>
        </div>
    )
}

export default ComponentRelated;
