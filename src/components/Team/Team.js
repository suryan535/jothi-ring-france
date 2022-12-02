import React from "react";
import classes from "./Team.module.css";
import Card from "./Card";
import Instagram from "../../assets/insta.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Zidane from "../../assets/zidane.jpg";
import Toni from "../../assets/tonikroos.jpg";
import Iker from "../../assets/ikercasillas.jpg";
import James from "../../assets/james.jpg";
import Cristiano from "../../assets/christiano.jpg";

const Team=()=>
{
    return(
       <div className={classes.outer}>
        <div className={classes.upper}>
            Without bonding and coordination, every project is a failure.
            Look at who makes KICKSUP great!!
        </div>
        <div className={classes.middle}>
          <Card 
          name="Zidane"
          description="Leadership & Management"
          image={Zidane}
          facebook={Facebook}
          instagram={Instagram}
          twitter={Twitter}
          />
          <Card 
          name="Toni Kroos"
          description="Product Developer"
          image={Toni}
          facebook={Facebook}
          instagram={Instagram}
          twitter={Twitter}
          />
          <Card
          name="Iker Casillas"
          description="Marketing Strategy"
          image={Iker}
          facebook={Facebook}
          instagram={Instagram}
          twitter={Twitter}
          />
          <Card
          name="James"
          description="Product Designer"
          image={James}
          facebook={Facebook}
          instagram={Instagram}
          twitter={Twitter}
          />
           <Card
          name="Cristiano"
          description="Financial Operations"
          image={Cristiano}
          facebook={Facebook}
          instagram={Instagram}
          twitter={Twitter}
          />
        </div>
        <div className={classes.lower}>
            and You!!
        </div>
       </div>
    );
} 

export default Team;