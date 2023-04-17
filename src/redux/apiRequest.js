import { adSuccess, amThucSuccess, diaDiemSuccess, dichVuSucces, fetchFailure, fetchStart, fetchSuccess, httSuccess, slideHr } from "./infoSlice";
import axios from "axios";
export const fecthUrl = async (dispatch) => {
    dispatch(fetchStart())
    try {
      const response = await axios.get('data.json');
      dispatch(fetchSuccess(response.data.dt[0]))
      dispatch(httSuccess(response.data.dt[1]))

     
    } catch (error) {
      console.error(error);
      dispatch(fetchFailure())
    }
  }
  export const getUrl = async (dispatch) => {

    try {
      const response = await axios.get('http://localhost:3001/posts');
    dispatch(adSuccess(response.data))
console.log(response, "getr");
     
    } catch (error) {
      console.error(error);

    }
  }
  
  export const postUrl = async ( newUser, url) => {

    try {
      const response = await axios.post(`http://localhost:3001/${url}`, newUser);
      
console.log(response, "post");
     
    } catch (error) {
      console.error(error);

    }
  }
  export const deleteUrl = async ( id) => {

    try {
      const response = await axios.delete(`http://localhost:3001/posts/${id}`);
   
console.log(response, "del");
     
    } catch (error) {
      console.error(error);

    }
  }
  export const updateUrl = async ( id, updatedData) => {

    try {
      const response = await axios.patch(`http://localhost:3001/posts/${id}`, updatedData);
    
console.log(response, "update");
     
    } catch (error) {
      console.error(error);

    }
  }


export const getUrlAmThuc = async(dispatch) =>{
  try{
    const res = await axios.get(`http://localhost:3001/amthuc`)
  dispatch(amThucSuccess(res.data))}catch(err){
    console.log(err);
  }
}
export const getUrlDichVu = async(dispatch) =>{
  try{
    const res = await axios.get(`http://localhost:3001/dichvu`)
  dispatch(dichVuSucces(res.data))}catch(err){
    console.log(err);
  }
}
export const getUrlDiaDiem = async(dispatch) =>{
  try{
    const res = await axios.get(`http://localhost:3001/diadiem`)
  dispatch(diaDiemSuccess(res.data))}catch(err){
    console.log(err);
  }
}