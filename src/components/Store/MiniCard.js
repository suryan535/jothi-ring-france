import React from "react";
import classes from "./MiniCard.module.css";

const MiniCard=(props)=>
{
    return(
        <div className={classes.outer}>
            <div className={classes.upper}>
                <img src={props.image} style={{width:"200px",height:"125px"}}></img>
            </div>
            <div className={classes.middle}>{props.name}</div>
            <div className={classes.lower}>
                {`Price: Rs ${props.price} | Star: ${props.star} Stars`}
            </div>
        </div>
    );
}

export default MiniCard;