import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUrl, getUrl } from "../../../redux/apiRequest";
import "./EditCategory.scss";

const EditCategory = () => {
  const { id } = useParams(); // Lấy id từ params
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const unitial = useSelector(state => state.img?.admin.ad)
  const [item, setItem] = useState(null)
  console.log(unitial, "test");
  const [category, setCategory] = useState({
    catgeory: "",
    title: "",
    cover: "",
    author: "",
    time: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUrl(id, category);
    navigate("/categories");
  };

  useEffect(() => {
    const item = unitial?.find((item) => item?.id === parseInt(id));
    if(item){
      setItem(item)
    }
    console.log(item, "edit");
    getUrl(id, dispatch);
  }, [id, dispatch]);

  const result = useSelector((state) => state?.img.admin);

  useEffect(() => {
    if (result && result.data) {
      const categoryData = result.data;
      setCategory({
        catgeory: categoryData.catgeory,
        title: categoryData.title,
        cover: categoryData.cover,
        author: categoryData.author,
        time: categoryData.time
      });
    }
  }, [result]);

  return (
    <div className="edit-category-container">
      <div className="edit-category">
        <h1>Edit Category</h1>

       <div style={{paddingBottom: "30px"}}>   <img style={{width: "200px"}} src={item?.cover}></img>
        <h2>{item?.time}</h2></div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="categoryName">Category Name:</label>
            <input
              type="text"
              name="catgeory"
              id="categoryName"
              value={category.catgeory}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Tên Tiêu Đề:</label>
            <input
              type="text"
              name="title"
              id="description"
              value={category.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cover">Đường dẫn ảnh:</label>
            <input
              type="text"
              name="title"
              id="cover"
              value={category.cover}
              onChange={handleInputChange}
            />
             
          
          </div>
          <div className="form-group">
            <label htmlFor="author">Tên Tác Giả:</label>
            <input
              type="text"
              name="title"
              id="author"
              value={category.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Thời gian Đăng:</label>
            <input
              type="text"
              name="title"
              id="time"
              value={category.time}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
