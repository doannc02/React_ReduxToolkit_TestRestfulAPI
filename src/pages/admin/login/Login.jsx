import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()
  const [inputUser, setInputUser] = useState("")
  const [pass, setPass] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3001/authorization").then((res) => {
      const users = res.data;
      console.log(res);
      const foundUser = users.find(
        (user) => user.username === inputUser && user.password === pass
      );
      if(foundUser){
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        setIsAdmin(foundUser.isAdmin)
        alert("Đăng nhập thành công!!!")
        navigate("/AdminList")
      }else{
        alert("Thất bại!!!")
      }
    })
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="titleLogin">Login</div>
        <div>
          <div>UserName</div>
          <input value={inputUser} onChange={(e)  => setInputUser(e.target.value)} type="text" placeholder="Username" />
        </div>
        <div>
          <div>Password</div>
          <input value={pass}  onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
        </div>
        <div className="but">
          <button type="submit">Button</button>
          <button type="submit"><Link to="/">Cancel</Link></button>
        </div>
      </form>
    </div>
  );
};

export default Login;
