import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const infoSlice = createSlice({
    name: "img",
    initialState: {
        fetch: {
            currentInfo: null,
            isFetching: false,
            error: false,
            success: false,      
        },
        htt:{
            imgs: null,
        },
        admin: {
            ad: null,
        },
        amThucImgs: {
            amThuc: null,
        },
        dichVuImgs: {
            dichVu: null
        },diaDiemImgs:{
            diadiem: null
        }
    },
    reducers: {
        fetchStart: (state) => {
            state.fetch.isFetching = true;
            state.fetch.success = true;
            state.fetch.error = false;
            
        },
        fetchSuccess: (state, action) => {
            state.fetch.currentInfo = action.payload;
            state.fetch.error = false;
            state.fetch.isFetching = false;
            state.fetch.success = true;
   
            
        },
        fetchFailure: (state) => {
            state.fetch.isFetching = false;
            state.fetch.error = true;
            state.fetch.success = false;
        },
        httSuccess: (state,action) =>{
            state.htt.imgs = action.payload
        },
        adSuccess:(state,action) => {
            state.admin.ad = action.payload
            
        },
        amThucSuccess: (state, action) => {
            state.amThucImgs.amThuc = action.payload
        },
        dichVuSucces: (state, action) => {
            state.dichVuImgs.dichVu = action.payload
        },
        diaDiemSuccess: (state, action) =>{
            state.diaDiemImgs.diadiem = action.payload
        }
    }
});


export const {
    fetchFailure, fetchStart, fetchSuccess,httSuccess, adSuccess, amThucSuccess, dichVuSucces,diaDiemSuccess
}  = infoSlice.actions

export default infoSlice.reducer