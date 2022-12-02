import React from "react";
import Logo from "../../assets/websitelogo.png";
import Contact from "../../assets/contact.png";
import classes from "./NavigationBar.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
const NavigationBar=()=>{
   return(
    <div className={classes.outer}>
        <div className={classes.inner} style={{paddingRight:"20%"}}><img src={Logo} style={{width:40}}></img></div>
        <div className={classes.inner}><Link to="/">Home</Link></div>
        <div className={classes.inner}><Link to="/journey">The Journey</Link></div>
        <div className={classes.inner}><Link to="/team">Team</Link></div>
        <div className={classes.inner}><Link to="/store">Store</Link></div>
        <div className={classes.inner}><Link to="/contact">Contact</Link></div>
        <div className={classes.inner} style={{paddingLeft:"20%"}}>
            <div className={classes.inner1}>
                <div className={classes.inner2}>
                    <img src={Contact} style={{width:40}}></img>
                </div>
                <div className={classes.inner2}>
                    <div>Gagan</div>
                </div>       
            </div>
        </div>
    </div>
   );

}

export default NavigationBar;