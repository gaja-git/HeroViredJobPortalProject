import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1> Welcome to Job Portal Page GAVI!!!</h1>
            <p> About GAVI</p>
            <div>
            <p> this section below should come in right side partition </p>

                <p> Are you a candidate searching for job? </p>
                <p> Please create your account </p>
            <Link to="/createaccount">
            <button>Create account!</button>
            </Link>
            </div>
        </div>
    );
}

export default Home;
