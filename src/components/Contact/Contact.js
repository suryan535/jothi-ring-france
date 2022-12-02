import React from "react";
import classes from "./Contact.module.css";

const Contact=()=>
{
    return(
       <div className={classes.outer}>
        <div className={classes.outer2}>
        <h1>REACH US AT</h1>
        <div className={classes.inner}>
            <div className={classes.textUpper}>
                support@kicksup.com
            </div>
            <div className={classes.textLower}>
                for any technical support
            </div>
        </div>
        <div className={classes.inner}>
            <div className={classes.textUpper}>
                info@kicsup.com
            </div>
            <div className={classes.textLower}>
                for more information
            </div>
        </div>
        <div className={classes.inner}>
            <div className={classes.textUpper}>
                feedback@kicksup.com
            </div>
            <div className={classes.textLower}>
                to send your feedback
            </div>
        </div>
        <div className={classes.inner}>
            <div className={classes.textUpper}>
                jobs@kicksup.com
            </div>
            <div className={classes.textLower}>
                to work with us
            </div>
        </div>
        </div>
       </div>
    );
} 

export default Contact;