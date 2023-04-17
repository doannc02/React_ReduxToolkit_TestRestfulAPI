 import React from "react";
 
import "./Left.scss"
import ComponentFaceBook from "../../components/ComponentFaceBook/ComponentFaceBook";
import { useSelector } from "react-redux";
import LeftComponentPage from "../../components/LeftComponetPage/LeftComponentPage";
import {  QuangCao2, QuangCao3 } from "../QuangCao/QuangCao";
 const Left = () => {
    const leftCPP = useSelector(state => state.img.admin.ad)
    return(
        <>
        <div className="containerLeftt">
        <>
      <QuangCao3/>
      </>
      <>
      <QuangCao2/>
      </> <>
      <QuangCao3/>
      </>
      <>
      <QuangCao3/>
      </>
        <div className="titleLeft"><h4>TIN MỚI ĐĂNG</h4></div>
       
       <div className="contentLeftTop">
     
        <LeftComponentPage leftCPP={leftCPP}/>
       </div>
       <div className="contentLeftBot">
           <ComponentFaceBook/>
       </div>
     
        </div>
   
        </>
    )
 }
 export default Left