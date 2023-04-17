import React from 'react';
import logo from "./imgs/9b95c8f8556f53ebdf1ace61524be9dfa897bd74.png"
import {CgCalendarDates} from 'react-icons/cg'
import {FcIdea} from 'react-icons/fc'
import {RiStarFill,RiStarHalfFill} from 'react-icons/ri'
const data = [
  {
   
  
    name: "Nice Hue Hotel",
    price: "VND 493.000",
  },
  {
  
  
    name: "Century Riverside Hue",
    price: "VND 653.000",
  },
  {
   
 
    name: "Hue Serene Palace Hotel",
    price: "VND 1.223.000",
  },
  {
  
    name: "Hue Serene Palace Hotel",
    price: "VND 1.223.000",
  }]
const BookingComponent = () => {
  return (
    <>

<div className='cpBooking'>
    <div className='headCpBooking'>
       
        <div className='loggo'>
            <img src={logo}></img>
        </div>
        <div className='thanh'>

        </div>
       <div className='uudai'>
        <h3>Ưu đãi</h3>
        <FcIdea/>
       </div>
        <div className='img'>
            <img src="https://cf.bstatic.com/xdata/images/city/600x200/688887.webp?k=5101e9d52be024f18eae58ec3e5ffa2c1c24e368f8d4747baf662b419f5dfe60&o="/>
        </div>
        <div className='titleHead'>
            <h5>Các ưu đãi về chỗ nghỉ</h5>
            <h2>Huế</h2>
            <span ><img style={{width: "20px"}} src='https://cf.bstatic.com/static/img/flags/32/vn/61498d0dfab033edb299e6d4ae0dd3b9f98ddccf.png'></img></span>
        </div>
        <div className='botHeadCp'>
           <div style={{padding: "5px"}}> <CgCalendarDates /></div>
            <span><h4>Nghỉ 1 đêm</h4>(3 tháng 3 - T3, 4 tháng 4)</span>
        </div>
    </div>
    <div className='bdCpBooking'>
        {data.map((item , index) =>{
            return (<div className='contentBooking'>
                <div className='titleName'>
                    <div className='n'>{item.name}
                    <div className='star'>
                    <span style={{color: "#FEBA02"}} ><RiStarFill/></span>
                    <span style={{color: "#FEBA02"}} ><RiStarFill/></span>
                    <span style={{color: "#FEBA02"}} ><RiStarFill/></span>
                    <span style={{color: "#FEBA02"}} ><RiStarFill/></span>
                    <span style={{color: "#FEBA02"}} ><RiStarHalfFill/></span>
                     </div>
                    
                </div>
                </div>
                <div className='price'>{item.price}</div>
            </div>)
        })}
       <div className='buttonn'> <button><a href="https://www.booking.com/">Xem toàn bộ ưu đãi</a></button></div>
    </div>
</div>

    </>
  
  );
};

export default BookingComponent;
