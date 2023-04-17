import React from "react"

import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../contenHover/contentHover.scss"

import MenuRight from "../../Menu/MenuRight";

const HoverAmTHuc= ({ isHoveringHue24h }) => {
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    if (isHoveringHue24h) {
      setActiveContent("DU LỊCH VIỆT");
    }
  }, []);
  const handleMenuClick = (content) => {
    setActiveContent(content);
  };
  const data = useSelector(
    state => state.img?.amThucImgs.amThuc

  );
  const data2 = useSelector(
    state =>state.img?.amThucImgs.amThuc
  );
  console.log("content", data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataa = data.slice(startIndex, endIndex);
  const dataSk = data2.slice(startIndex, endIndex);
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
            <div
              className="item"
              onMouseEnter={() => handleMenuClick("DU LỊCH VIỆT")}
            >
              <span>DU LỊCH VIỆT</span>
            </div>
            <div
              className="item"
              onMouseEnter={() => handleMenuClick("SỰ KIỆN")}
            >
              <span>THẾ GIỚI ĐÓ ĐÂY</span>
            </div>
            <div
              className="item"
              onMouseEnter={() => handleMenuClick("LỊCH SỬ HUẾ")}
            >
              <span>CẨM NANG VÀ KINH NGHIỆM</span>
            </div>
            <div
              className="item"
              onMouseEnter={() => handleMenuClick("VĂN HÓA & XÃ HỘI")}
            >
              <span>VĂN HÓA & XÃ HỘI</span>
            </div>
          </div>

          <div className="content">
            {activeContent === "TIN TỨC HUẾ" && (
              <MenuRight
                dataa={dataa}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            )}
            {activeContent === "DU LỊCH VIỆT" && (
              <MenuRight
                dataa={dataSk}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            )}
            {activeContent === "LỊCH SỬ HUẾ" && (
              <MenuRight
                dataa={dataa}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            )}
            {activeContent === "VĂN HÓA & XÃ HỘI" && (
              <MenuRight
                dataa={dataa}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverAmTHuc;
