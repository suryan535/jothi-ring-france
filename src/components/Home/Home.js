import React from "react";
import classes from "./Home.module.css";
import Error from "../../assets/error.png";

const Home=()=>
{
    return(
        <>
        <h1>Home</h1>
        <h2> Page Not Given In Question</h2><img src={Error}></img>
        </>
    );
}

export default Home;