import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarTop from "./components/navbarTop/NavbarTop";
import NavbarBottom from "./components/navbarBottom/NavbarBottom";
import { useDispatch, useSelector } from "react-redux";

import "../src/App.scss";
import {
  fecthUrl,
  getUrl,
  getUrlAmThuc,
  getUrlDiaDiem,
  getUrlDichVu,
} from "./redux/apiRequest";
import SinglePage from "./components/singlePage/slider/SinglePage";
import Categories from "./pages/admin/listCatgory/ListCatgory";
import Login from "./pages/admin/login/Login";
import ComponentHue24h from "./components/componentHue24h/ComponentHue24h";
import Footer from "./components/footer/Footer";
import AddList from "./pages/admin/AddUser/AddUser";
import SliceCatgory from "./pages/SliceCatgory/SliceCatgory";
import { useState } from "react";
import Category from "./pages/Category/Category";
import EditCategory from "./pages/admin/Edit/Edit";

function App() {
  const cpDV = useSelector((state) => state.img.dichVuImgs.dichVu);
  const cpDL = useSelector((state) => state.img.admin.ad);
  const cpDD = useSelector((state) => state.img.diaDiemImgs.diadiem);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);

    getUrl(dispatch);
    getUrlDichVu(dispatch);
    getUrlDiaDiem(dispatch);
    getUrlAmThuc(dispatch)
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Router>
      <header onSubmit={handleSubmit}>
        <NavbarTop />
        <div className={`navbarBottom ${isScrolled ? "fixed" : ""}`}>
          <NavbarBottom />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/AddCategory" element={<AddList />} />
          <Route path="/AdminList" element={<Categories />} />
          <Route path="/" element={<Home />} />
          <Route path="/DanhMuc/:titl" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SinglePage/:id" element={<SliceCatgory />} />
          <Route path="/EditCategory/:id" element={<EditCategory />} />
          <Route path="/Catgories" element={<Categories />} />
        </Routes>
       
      </main>
    </Router>
  );
}

export default App;
