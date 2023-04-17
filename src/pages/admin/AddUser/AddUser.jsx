import React, { useState } from 'react';
import { postUrl } from '../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import './AddUser.scss';

function AddList() {
  const [cat, setCat] =useState('')
  const [cover ,setCover] = useState('')
  const [url, setUrl] = useState('posts');
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [indent,setIdent] = useState('')
  const navigate = useNavigate();

  const handleAddList = () => {
  const cate = {
    url: url,
    cover: cover,
    catgeory : cat,
    title: title,
    authorName: author,
    time: date,
    details: content
  }
    postUrl(cate, url)
      .then(response => {
        console.log('Thêm danh sách thành công:', response);
        // Reset các ô input sau khi thêm thành công
        setIdent('')
        setUrl('');
        setTitle('');
        setContent('');
        setDate('');
        setAuthor('');
        navigate('/AdminList');
      })
      .catch(error => {
        console.error('Thêm danh sách thất bại:', error);
      });
  };

  return (
    <div className="add-list">
      <h1>Thêm danh sách</h1>
      <form>
        <div className="form-group">
          <label htmlFor="url">Đường dẫn:</label>
          {/* <input type="text" id="title" value={url} onChange={e => setUrl(e.target.value)} /> */}
          { <select id="url" value={url} onChange={e => setUrl(e.target.value)}>
  <option value="posts">posts</option>
  <option value="amthuc">amthuc</option>
  <option value="dichvu">dichvu</option>
  <option value="diadiem">diadiem</option>
</select> }
        </div>
        <div className="form-group">
          <label htmlFor="title">Identyti:</label>
          <input type="text" id="title" value={indent} onChange={e => setIdent(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="title">Tiêu đề:</label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
    <div className="form-group">
          <label htmlFor="content">Danh Mục:</label>
          <textarea id="content" value={cat} onChange={e => setCat(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Nội dung:</label>
          <textarea id="content" value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Chọn đường dẫn ảnh:</label>
          <textarea id="content" value={cover} onChange={e => setCover(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Ngày đăng:</label>
          <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="author">Tác giả đăng:</label>
          <input type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)} />
        </div>

        <button type="button" onClick={handleAddList}>Thêm danh sách</button>
      </form>
    </div>
  );
}

export default AddList;
