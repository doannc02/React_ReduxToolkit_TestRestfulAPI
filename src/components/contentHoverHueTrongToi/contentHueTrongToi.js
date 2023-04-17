import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../contenHover/contentHover.scss"

import MenuRight from "../Menu/MenuRight";




const ContentHover = ({ isContentHueTrongToi }) => {
  const [activeContentHTT, setActiveContentHTT] = useState(null);

  useEffect(()=>{
    if(isContentHueTrongToi){
      setActiveContentHTT("NGƯỜI HUẾ")
    }
  }, [])
  const handleMenuClick = (content) => {
    setActiveContentHTT(content);
  }
  const dataNguoiHue = useSelector((state) => state.img?.admin.ad);
  // const data2 = useSelector((state) => state.img.fetch.currentInfo.Hue24h[1].SuKien);
  
console.log("ct", dataNguoiHue);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(dataNguoiHue?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataNH = dataNguoiHue?.slice(startIndex, endIndex);
  // const dataSk = data2.slice(startIndex,endIndex)
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="dropDownmenu1">
      <div className="dropDownmenu1Wrapper">
        <div className="left">
          <div>
          <div className="item" onMouseEnter={() => handleMenuClick("NGƯỜI HUẾ")}>
            <span>NGƯỜI HUẾ</span>
          </div>
          <div className="item" onMouseEnter={() => handleMenuClick("SỰ KIỆN")}>
            <span>SỰ KIỆN</span>
          </div>
          <div className="item" onMouseEnter={() => handleMenuClick("LỊCH SỬ HUẾ")}>
            <span>LỊCH SỬ HUẾ</span>
          </div>
          <div className="item" onMouseEnter={() => handleMenuClick("VĂN HÓA & XÃ HỘI")}>
            <span>VĂN HÓA & XÃ HỘI</span>
          </div>
          </div>
         
          <div className="content">
            {activeContentHTT === "NGƯỜI HUẾ" && (
              <MenuRight
                dataa={dataNH}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            )}
            {activeContentHTT === "SỰ KIỆN" && (
              <MenuRight dataa={dataNH} currentPage={currentPage}
              totalPages={totalPages}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage} />
            )}
            {activeContentHTT === "LỊCH SỬ HUẾ" && (
              <MenuRight dataa={dataNH} currentPage={currentPage}
              totalPages={totalPages}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}/>
            )}
            {activeContentHTT === "VĂN HÓA & XÃ HỘI" && (
              <MenuRight dataa={dataNH} currentPage={currentPage}
              totalPages={totalPages}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}/>
            )}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ContentHover;