import React,{useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Login = () => {
    let [info, setInfo] = useState({});

    const handleLogin = (e) => {
        setInfo({
            ...info,
         [e.target.name] : e.target.value
     })
    }
    console.log(info);

    async function sendLogin() {
        let res = await axios.post("http://127.0.0.1:3001/bloguser", info)
        console.log(res.info);
    }
    return (
        <div>
            <input type="text" placeholder='email' name='email'  onChange={handleLogin}/>
            <input type="text" placeholder='password' name='password' onChange={handleLogin}/>
            <input type="submit" onClick={sendLogin} />
            <Link to="/">
            <p>Profile - Update later on</p>
            </Link>
        </div>
    );
}

export default Login;
