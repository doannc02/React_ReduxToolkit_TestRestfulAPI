import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUrl, deleteUrl } from "../../../redux/apiRequest";
import "./ListCatgory.scss";
const ITEMS_PER_PAGE = 5;
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
  }
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Lấy thông tin người dùng từ localStorage

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const result = useSelector(state => state.img.admin)
  const dt = result.ad
  console.log(result);
  const handleDelete = async (categoryId) => {
    await deleteUrl(categoryId);
    setCategories(categories.filter((category) => category.id !== categoryId));
  };
  useEffect(() => {
    
      getUrl(dispatch)
    if (!currentUser || !currentUser.isAdmin) { // Kiểm tra xem người dùng đã đăng nhập và có phải là Admin hay không
    
     navigate("/Login") // Nếu không, chuyển hướng đến trang đăng nhập
     }
      if (result && result.data) {
      
        const { data, totalPages } = result.data;
        setCategories(data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE));
        setTotalPages(Math.ceil(totalPages / ITEMS_PER_PAGE));
      }
     
    
  }, [currentPage, handleDelete]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  
  return (
    <div className="categories-container">
    <div className="categories">
      <h1>Categories</h1>
      <div className="btTop">
      <Link to="/AddCategory"><button className="add-button">Add</button></Link>
        
        <button className="logout" type="button" onClick={handleLogout}><Link to="/">Logout</Link></button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dt?.length > 0 ? (
            dt?.map((category) => (
              <tr key={category.id}>
                <td>{category.time}</td>
                <td>{category.catgeory}</td>
                <td>{category.title}</td>
                <td>
                  <Link to={`/EditCategory/${category.id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                  <button className="delete-button" onClick={() => handleDelete(category.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No categories found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <div className="page-info">
          Page {currentPage} of {totalPages}
        </div>
        <div className="page-buttons">
          <button className="btnPre" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            {"<"}
          </button>
          <button className="btnPre" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
           {">"}
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Categories;
