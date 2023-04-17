import React from "react";
import { WiTime9 } from "react-icons/wi";
import "./MenuRight.scss"
import { Link } from "react-router-dom";
const MenuRight = ({
  dataa,
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="right-menu-top">
      <div className="rightTop">
        <>
          {dataa?.map((item, index) => (
            <div className="item-menu-right" key={index}>
              <div className="imgg">
               <Link to={`/SinglePage/${item.id}`}>
               <a className="thumb">
                  <img src={item.cover} alt="ảnh" />
                </a>
               </Link>
                <a className="catt">{item.catgeory}</a>
                <a style={{ fontSize: "13px", fontWeight: "700" }}>
                  {item.title}
                </a>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#666",
                    fontWeight: "400",
                  }}
                >
                  <WiTime9 /> {item.time}
                </div>
                {index === 3 && (
                  <div className="button-container">
                    <button
                      disabled={currentPage === 1}
                      onClick={handlePrevPage}
                      className="button-1"
                    >
                      {"<"}
                    </button>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={handleNextPage}
                      className="button-2"
                    >
                      {">"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default  MenuRight;
