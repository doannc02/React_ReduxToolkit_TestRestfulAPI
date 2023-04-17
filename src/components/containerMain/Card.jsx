import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.scss"
import axios from "axios";
import { useCallback } from "react";
import { postUrl } from "../../redux/apiRequest";

const CardList = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  const handlePrevClick = () => {
    setIndex(index - 4);
  };

  const handleNextClick = () => {
    setIndex(index + 4);
  };

  const renderCards = () => {
    return data.slice(index, index + 4).map((item) => (
      <div className='box' key={item.id}>
        <div className='img'>
          <img src={item.cover} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{item.catgeory}</span>
          <Link to={`/SinglePage/${item.id}`}>
            <h1 className='titleBg'>{item.title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {item.authorName}</span>
            <span>{item.time}</span>
          </div>
        </div>
      </div>
    ));
  };

  const fecthUrl = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3001/posts');
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fecthUrl();
  }, [fecthUrl]);

  return (
    <section className='hero'>
      <div className='container'>
        {renderCards()}
      </div>
      <div>
        <button style={{position: "absolute", top: "340px", left: "70px",width: "25px", height: "35px", backgroundColor:"#eee", opacity:"0.2"}} onClick={handlePrevClick}>{"<"}</button>
        <button style={{position: "absolute", top: "340px", right: "70px",width: "25px", height: "35px", backgroundColor:"#eee", opacity:"0.2" }}  onClick={handleNextClick}>{">"}</button>
      </div>
    </section>
  );
};



 
export default CardList