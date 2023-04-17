import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./contentHover.scss";

import MenuRight from "../Menu/MenuRight";

const ContentHover = ({ isHoveringHue24h }) => {
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    if (isHoveringHue24h) {
      setActiveContent("TIN TỨC HUẾ");
    }
  }, [isHoveringHue24h]);
  const handleMenuClick = (content) => {
    setActiveContent(content);
  };
  const data = useSelector(
    state =>state.img.admin?.ad
  );
  console.log("datta",data);
  const data2 = useSelector(
    (state) =>state.img.admin?.ad
  );
  console.log("content", data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(data?.length / itemsPerPage);
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
              onMouseEnter={() => handleMenuClick("TIN TỨC HUẾ")}
            >
              <span>TIN TỨC HUẾ</span>
            </div>
            <div
              className="item"
              onMouseEnter={() => handleMenuClick("SỰ KIỆN")}
            >
              <span>SỰ KIỆN</span>
            </div>
            <div
              className="item"
              onMouseEnter={() => handleMenuClick("LỊCH SỬ HUẾ")}
            >
              <span>LỊCH SỬ HUẾ</span>
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
            {activeContent === "SỰ KIỆN" && (
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

export default ContentHover;
