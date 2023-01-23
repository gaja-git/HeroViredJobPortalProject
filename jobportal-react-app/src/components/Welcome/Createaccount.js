import React ,{useState} from "react"
import { Link } from "react-router-dom";

export default function CreateAccount(){

    let [data, setData] = useState({});

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
      console.log(data);
    };
    const sendData = async () => {
    //   let res = await Axios.post("/user", data);
    //   console.log(res.data);
    };

	return(
	<div> 
	<input type="text" placeholder="useremail" name="email" onChange={handleChange}/>
	<input type="password" placeholder="password" name="password" onChange={handleChange}/>
	<input type="submit" placeholder="Create Account" onClick={sendData} /> 
            <Link to="/login">
            <button>Login here!</button>
            </Link>
	</div>
	
	)
}