import React from "react";
import classes from "./Card.module.css";

const Card=(props)=>
{
   return(
     <div className={classes.outer}>
        <div className={classes.upper}><img src={props.image} style={{width:"180px",height:"200px"}}></img></div>
        <div className={classes.middle}>
            <div className={classes.middleUpper}>
                {props.name}
            </div>
            <div className={classes.middleLower}>
                {props.description}
            </div>
        </div>
        <div className={classes.lower}>
            <div className={classes.lowerInner}>
                <img src={props.facebook}></img>
            </div>
            <div className={classes.lowerInner}>
                <img src={props.instagram}></img>
            </div>
            <div className={classes.lowerInner}>
                <img src={props.twitter}></img>
            </div>
        </div>
     </div>
   );
}

export default Card;