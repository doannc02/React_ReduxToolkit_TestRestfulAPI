import React from "react";
import "../../components/ComponentRelated/ComponentRelate"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Left/Left.scss";
import "./SliceCatgory.scss";
import "../Right/Right.scss";
import "../home/home.scss";
import Left from "../Left/Left";
import Right from "../Right/Right";
import NavbarBottom from "../../components/navbarBottom/NavbarBottom";
import { useSelector } from "react-redux";
import NavbarTop from "../../components/navbarTop/NavbarTop";
import { BiLike } from "react-icons/bi";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import ComponentRelated from "../../components/ComponentRelated/ComponentRelate";
import LeftComponentPage from "../../components/LeftComponetPage/LeftComponentPage";
import { QuangCao1, QuangCao2, QuangCao3 } from "../QuangCao/QuangCao";
import Footer from "../../components/footer/Footer";
const SliceCatgory = () => {
  const dt = useSelector((state) => state.img?.admin.ad);
const leftCPP = useSelector((state) => state.img?.dichVuImgs.dichVu)
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const item = dt?.find((item) => item?.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    }
  }, [id]);

  console.log("slice", dt, item);
  return (
    <>
    <div className="SlicePage">
      <div className="SliceMain">
        {item?.details?.map((data) => (
          <div className="headS">
            <div className="backgr">
              <img src={data.img1}></img>
            </div>{" "}
          </div>
        ))}
      </div>
      <div className="mainTop">
        <div className="containerMainLeft">
            <div style={{backgroundColor:"#eee", width: "298px", borderLeft: "black 5px solid", height:"35px", fontWeight:"500", fontSize:"23px", padding:"5px"}}>TIN XEM NHIỀU </div>
            <LeftComponentPage leftCPP={leftCPP}/>
            <QuangCao1/>
            <QuangCao2/>
            <QuangCao2/>
        </div>
        <div className="Center">
       
              <div className="CenterTitle">
                Home {">"} {item?.catgeory} {">"} {item?.title}
              </div>
              <div className="category">{item?.catgeory}</div>
              <h1 className="titleMain">{item?.title}</h1>
              <div className="CenterTitle">
                <span>
                  {item?.authorName}
                  {","}
                  {item?.time}
                </span>
              </div>
              <div className="CenterIcon">
                <h3>SHARE</h3>
                <div className="Like">
                  <BiLike />{" "}
                </div>
              <div className="ic">  <div className="face">
                  < FiFacebook />
                </div>
                <div className="tw">
                  <CiTwitter />
                </div></div>
              </div>
            <div style={{width: "750px", paddingLeft:"40px"}} className="anh1">
                {item?.details?.map((data2) => (
                    <img style={{width: "700px" ,objectFit:"cover"}} src={data2.img2}/>
                ))}
            </div>
            <div style={{width: "780px", fontWeight:"500", padding: "7px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para2}</p>
                ))}
            </div>

            <div style={{width: "750px", paddingLeft:"40px"}} className="anh1">
                {item?.details?.map((data2) => (
                    <img style={{width: "700px" ,objectFit:"cover"}} src={data2.img3}/>
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "9px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                ))}
            </div>
            <div style={{width: "750px",paddingLeft:"40px"}} className="anh1">
                {item?.details?.map((data2) => (
                    <img style={{width: "700px" ,objectFit:"cover"}} src={data2.img4}/>
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "7px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para4}</p>
                
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "5px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "7px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500",padding: "7px", paddingBottom: "50px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                
                ))}
            </div>
            
        <div className="author"><img src={item?.authorImg}/> <span style={{paddingBottom:"20px"}}>{item?.authorName}</span></div>
        <div className="Rela"><ComponentRelated/> </div>
        </div>
        <div className="containerMainRight"><Right/></div>
      </div>
  
    </div>
    <div className="SlicePage">
      <div className="SliceMain">
        {item?.details?.map((data) => (
          <div className="headS">
            <div className="backgr">
              <img src={data.img1}></img>
            </div>{" "}
          </div>
        ))}
      </div>
      <div className="mainTop">
        <div className="containerMainLeft">
            <div style={{backgroundColor:"#eee", width: "298px", borderLeft: "black 5px solid", height:"35px", fontWeight:"500", fontSize:"23px", padding:"5px"}}>TIN XEM NHIỀU </div>
            <LeftComponentPage leftCPP={leftCPP}/>
            <QuangCao1/>
            <QuangCao2/>
            <QuangCao2/>
        </div>
        <div className="Center">
       
              <div className="CenterTitle">
                Home {">"} {item?.catgeory} {">"} {item?.title}
              </div>
              <div className="category">{item?.catgeory}</div>
              <h1 className="titleMain">{item?.title}</h1>
              <div className="CenterTitle">
                <span>
                  {item?.authorName}
                  {","}
                  {item?.time}
                </span>
              </div>
              <div className="CenterIcon">
                <h3>SHARE</h3>
                <div className="Like">
                  <BiLike />{" "}
                </div>
              <div className="ic">  <div className="face">
                  < FiFacebook />
                </div>
                <div className="tw">
                  <CiTwitter />
                </div></div>
              </div>
            <div style={{width: "750px", paddingLeft:"40px"}} className="anh1">
                {item?.details?.map((data2) => (
                    <img style={{width: "700px" ,objectFit:"cover"}} src={data2.img2}/>
                ))}
            </div>
            <div style={{width: "780px", fontWeight:"500", padding: "7px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para2}</p>
                ))}
            </div>

            <div style={{width: "750px", paddingLeft:"40px"}} className="anh1">
                {item?.details?.map((data2) => (
                    <img style={{width: "700px" ,objectFit:"cover"}} src={data2.img3}/>
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "9px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                ))}
            </div>
            <div style={{width: "750px",paddingLeft:"40px"}} className="anh1">
                {item?.details?.map((data2) => (
                    <img style={{width: "700px" ,objectFit:"cover"}} src={data2.img4}/>
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "7px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para4}</p>
                
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "5px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500", padding: "7px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                
                ))}
            </div>
            <div style={{width: "770px", fontWeight:"500",padding: "7px", paddingBottom: "50px", lineHeight:"2.5"}} className="para1">
                {item?.details?.map((data2) => (
                    <p>{data2.para3}</p>
                
                ))}
            </div>
            
        <div className="author"><img src={item?.authorImg}/> <span style={{paddingBottom:"20px"}}>{item?.authorName}</span></div>
        <div className="Rela"><ComponentRelated/> </div>
        </div>
        <div className="containerMainRight"><Right/></div>
      </div>
                    
    </div>
    <div style={{paddingTop: "680vh"}}><Footer/></div>
    </>
  );
};

export default SliceCatgory;
