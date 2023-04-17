import "./navbarBottom.scss";
import logo from "../../asserts/imgs/cropped-logo_du-lich-hue.png";
import { useState } from "react";
import "../navbarBottom/contentAnimation.scss"
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import ContentHover from "../contenHover/contentHover";
import ContentHoverHueTrongToi from "../contentHoverHueTrongToi/contentHueTrongToi";
import HoverDuLich from "../hoverDuLich/HoverDuLich";
import { Link } from "react-router-dom";
import HoverAmTHuc from "./hoverAmThuc/HoverAmThuc";

const NavbarBottom = () => {

  const [showContentHover, setShowContentHover] = useState(false);
  const [showContentHoverHueTrongToi, setShowContentHoverHueTrongToi] = useState(false);
  const [showContentHoverDuLich, setShowContentHoverDuLich] = useState(false)
  const [showContentHoverAmThuc, setShowContentHoverAmThuc] = useState(false)
  const handleMouseEnter = (type) => {
    if (type === 'hover') {
      setShowContentHover(true);
    } else if (type === 'hoverHueTrongToi') {
      setShowContentHoverHueTrongToi(true);
    }else if(type === 'hoverDuLich'){
      setShowContentHoverDuLich(true)
    }else if(type === 'hoverAmThuc'){
      setShowContentHoverAmThuc(true)
    }

  };

  const handleMouseLeave = (type) => {
    if (type === 'hover') {
      setShowContentHover(false);
    } else if (type === 'hoverHueTrongToi') {
      setShowContentHoverHueTrongToi(false);
    }else if(type === 'hoverDuLich'){
      setShowContentHoverDuLich(false)
    }else if(type === 'hoverAmThuc'){
      setShowContentHoverAmThuc(false)
    }
  };

  return (
    <div className="navbarBottom">
      <div className="logo">
        <img src="https://dulichhue.com.vn/wp-content/uploads/2018/11/cropped-logo_du-lich-hue.png" style={{ height: "55px", width: "55px" }} />
      </div>
      <div className="navbarBottomWrapper">
        <div className="item-title">
          <span
            style={{ color: "#00b0ff", fontWeight: "700", fontSize: "13px" }}
          >
           <Link to='/'> HOME</Link>
          </span>
        </div>
        <div
          className="itemNav"
          onMouseEnter={() => handleMouseEnter('hover')}
          onMouseLeave={() => handleMouseLeave('hover')}
        >
          <div className="item-title">
            <span >
              <Link to={`/DanhMuc/${"Hue24h"}`}>HUẾ 24H</Link> </span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
          </div>
 <div className={`item-hover ${showContentHover ? 'active' : ''}`}>
{showContentHover && <ContentHover isHoveringHue24h={{showContentHover}} />}</div>
        </div>
        <div 
          className="itemNav" 
          onMouseEnter={() => handleMouseEnter('hoverHueTrongToi')}
          onMouseLeave={() => handleMouseLeave('hoverHueTrongToi')}
        >
          <div className="item-title">
            <span>HUẾ TRONG TÔI</span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
          </div>
          <div className={`item-hover ${showContentHoverHueTrongToi ? 'active' : ''}`}>
{showContentHoverHueTrongToi && <ContentHoverHueTrongToi isContentHueTrongToi={showContentHoverHueTrongToi} />}</div>
        </div>
        <div className="itemNav" onMouseEnter={() => handleMouseEnter('hoverDuLich')}
          onMouseLeave={() => handleMouseLeave('hoverDuLich')}>
          <div className="item-title">
            <span>DU LỊCH</span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
          </div>
          <div className={`item-hover ${showContentHoverDuLich ? 'active' : ''}`}>
{showContentHoverDuLich && <HoverDuLich isHoveringHue24h={{showContentHoverDuLich}} />}</div>
        </div>
        <div className="itemNav" onMouseEnter={() => handleMouseEnter('hoverAmThuc')}
          onMouseLeave={() => handleMouseLeave('hoverAmThuc')}>
          <div className="item-title">
            <span><Link to={`/DanhMuc/${"Amthuc"}`}>ẨM THỰC</Link></span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
            <div className={`item-hover ${showContentHoverAmThuc ? 'active' : ''}`}>
{showContentHoverAmThuc && <HoverAmTHuc isHoveringHue24h={{showContentHoverAmThuc}} />}</div>
          </div>
        </div>
        <div className="itemNav">
          <div className="item-title">
            <span><Link to={`/DanhMuc/${"DiaDiem"}`}>ĐỊA ĐIỂM HUẾ</Link></span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
          </div>
        </div>
        <div className="itemNav">
          <div className="item-title">
            <span>DỊCH VỤ</span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
          </div>
        </div>
        <div className="itemNav">
          <div className="item-title">
            <span>GALLERY</span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
          </div>
        </div>
        <div className="itemNav">
          <div className="item-title">
            <span>KHUYẾN MÃI</span>
            <MdKeyboardArrowDown style={{ fontSize: "17px" }} />
          </div>
        </div>
      </div>
      <div className="search" style={{ backgroundColor: "#00b0ff" }}>
        <BiSearch
          className="searchItem"
          style={{
            fontSize: "20px",
            fontWeight: 600,
            alignItems: "center",
            justifyContent: "center",
            color: "#ffff",
          }}
        />
      </div>
    </div>
  );
};
export default NavbarBottom;
