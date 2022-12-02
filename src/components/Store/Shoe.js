import React, { useContext } from "react";
import classes from "./Shoe.module.css";
import {Link} from "react-router-dom";
import DataContext from "../context/DataContext";

const Store=(props)=>
{
    let index=window.location.pathname;
    index=Number(index[index.length-1]);

    const data=useContext(DataContext);
    const shoeData=data.filter((item)=>item.id===index);
    return(
       <div className={classes.left}>
            <div className={classes.image}>
                <img src={shoeData[0].image} style={{width:"700px",height:"600px"}}></img>
            </div>
            <div className={classes.description}>
                <div className={classes.inner}>{shoeData[0].name}</div>
                <div className={classes.inner}>{`Rs: ${shoeData[0].price}`}</div>
                <div className={classes.inner}>{`Rating: ${shoeData[0].star}`}</div>
                <button className="button-3" onClick={()=>props.addCart(index)}>Add to Cart</button>
                <button className="button-40"><Link to="/store">Back to Store</Link></button>
            </div>
       </div>
    );
} 

export default Store;