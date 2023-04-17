import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUrl } from "../../redux/apiRequest";
import "../componentHue24h/componentHue24h.scss"
import "./ComponentHueTrongToi.scss"


const ComponentHueTrongToi = () =>{
  
  const cpH = useSelector(state => state.img.admin?.ad)
   const [currentPage, setCurrentPage] = useState(1); // trang hiện tại
   const [postsPerPage, setPostsPerPage] = useState(4); 
   const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = cpH?.slice(indexOfFirstPost, indexOfLastPost);

   
   console.log(cpH);
    return(
        <div className="componentHueTrongToi componentHue24h">
            <div className="cpHTTNav cpH24hNav">
                <div style={{ width:"135px"}} className="leftNavi">HUẾ TRONG TÔI</div>
                <div className="rightNavi">
                    <Link >All</Link>
                    <Link>Viết về Huế</Link>
                    <Link>Bạn có biết?</Link>
                    <Link>Người Huế</Link>
                    <Link>Vẻ đẹp Huế</Link>
                </div>
            </div>
            <div className="cpHTT">
  {currentPosts?.map(item => {
    if (item.catgeory !== "") {
      return (
        <div className='cpHTTMain ' key={item.id}>
          <div className=''>
            <img src={item.cover} alt='' />
          </div>
          <div className='cpHTTText '>
          <div className=''>
              <span>{item.time}</span>
            </div>
            <Link to={`/SinglePage/${item.id}`}>
            
              <h3 className='txtCpHTT '>{item.title}</h3>
            </Link>
          
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
export default ComponentHueTrongToi