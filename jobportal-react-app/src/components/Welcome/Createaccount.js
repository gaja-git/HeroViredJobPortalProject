import React, { useState } from "react"
import { Link } from "react-router-dom";
import './createacc.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateAccount() {

  let [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const sendData = async () => {
    let res = await axios.post("/user", data);
    console.log(res.data);
    navigate("/jobcanvas");
  };

  return (
    <div className="createac_page" >
      <div className="header" >
        <h3 >GAVI JobPortal</h3>
      </div>
      <div className="createac_container">
        <input type="text" placeholder="useremail" name="email" onChange={handleChange} /> <br></br>
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <input type="submit" placeholder="Create Account" onClick={sendData} />

      </div>
    </div>

  )
}