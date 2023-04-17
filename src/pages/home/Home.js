import "./home.scss"
import "../../components/ComponentBooking/ComponentBooking.scss"
import React, { Component } from "react";
import {useState, useEffect} from "react";
import NavbarBottom from "../../components/navbarBottom/NavbarBottom";
import { deleteUrl, fecthUrl, getUrl, getUrlDiaDiem, getUrlDichVu, postUrl } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../../components/containerMain/Card";

import ComponentHue24h from "../../components/componentHue24h/ComponentHue24h";
import { adSuccess, dichVuSucces } from "../../redux/infoSlice";
import Footer from "../../components/footer/Footer";
import ComponentHueTrongToi from "../../components/componentHueTrongToi/ComponentHueTrongToi";
import ComponentDuLich from "../../components/componentDuLich/ComponentDuLich";
import ComponentAmThuc from "../../components/ComponentAmThuc/ComponentAmThuc";
import ComponentDiaDiem from "../../components/ComponentDiaDiem/ComponentDiaDiem";
import BookingComponent from "../../components/ComponentBooking/ComponentBooking";
import MainBottom from "./mainBottom/MainBottom";
import NavbarTop from "../../components/navbarTop/NavbarTop";
import Left from "../Left/Left";
import ComponentFaceBook from "../../components/ComponentFaceBook/ComponentFaceBook";
import Right from "../Right/Right";

const newUser = {
  name: "doan"
  }
function Home() {
  const dispatch = useDispatch()

 const cpDV = useSelector(state => state.img.dichVuImgs.dichVu)
 const cpDL = useSelector(state => state.img.admin.ad)
 const cpDD = useSelector(state => state.img.diaDiemImgs.diadiem)

console.log(cpDD,"dv");
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() =>{
        const handleScroll =() =>{
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0)
        }
        window.addEventListener("scroll", handleScroll)
      getUrlDichVu(dispatch)
      getUrlDiaDiem(dispatch)
        console.log("hi");
    } , [])
    const handleSubmit = (e) =>{
        e.preventDefault();
        
       
        
        
    }
    
    return (
       <form onSubmit={handleSubmit}>

         <div className="home">
         
           <div className="header"> 
          
            <div className="imgContainer"> <CardList ></CardList></div>
            </div>
            <div className="containerMain">
               <div className="mainTop">
                 <div className="containerMainLeft">
                  <Left />
               </div>
                <div className="containerMainCenter">
                    <div className="bookingComponent"><BookingComponent/></div>
                    <div className="hue24hComponent"><ComponentHue24h/> </div>
                    <div className="hueTrongToiComponent"><ComponentHueTrongToi></ComponentHueTrongToi></div>
                    <div className="duLichComponent"><ComponentDuLich dv={false} cpDL={cpDL} /></div>
                    <div className="amThucComponent"><ComponentAmThuc/></div>
                    <div className="dichVuComponent"><ComponentDuLich dv={true} cpDL={cpDV}/></div>
                    <div className="diaDiemComponent"><ComponentDiaDiem cpDD={cpDD}/></div>
                </div>
                <div className="containerMainRight">
                 <Right/>
                </div>
                </div>
                <div className="mainBottom">
                    <MainBottom/>
                </div>
            </div>
           
        </div>
        <Footer/>
       </form>
    )
}
export default Home;