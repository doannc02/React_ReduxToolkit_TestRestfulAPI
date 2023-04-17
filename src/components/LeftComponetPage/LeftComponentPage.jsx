import React from "react";
import "./LeftComponentLeft.scss"
import { Link } from "react-router-dom";
const LeftComponentPage = ({leftCPP}) => {

    return ( <div className="LeftComponentPage">
    {leftCPP?.map(item => {
if (item.id > 0) {
return (
    
<div className='cpLeftPageBox' key={`${item.id}`}>
<div className='cpLeftPageBoxCover'>
  <img src={item.cover} alt='' />
</div>
<div className=''>

 
  <Link to={`/SinglePage/${item.id}`}>
    <h4 className='' style={{fontWeight: "700", color:"black"}}>{item.title}</h4>
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

</div>)
}
export default LeftComponentPage