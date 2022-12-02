import React from "react";
import { useState,useContext} from "react";
import classes from "./FilterPane.module.css";
import {
    Link
  } from "react-router-dom";
import DataContext from "../context/DataContext";
import MiniCard from "./MiniCard";

const FilterPane=()=>
{
    const DUMMY=useContext(DataContext);
    const [shoes,setShoes]=useState(useContext(DataContext));
    const [costCheckBox,setCostCheckBox]=useState([
        {
            id:1,
            name:"Rs 1500-4000",
            isChecked:false
        },
        {
            id:2,
            name:"Rs 4001-7000",
            isChecked:false
        },
        {
            id:3,
            name:"Rs 7000+",
            isChecked:false
        }

    ]
    );
    const [starCheckBox,setStarCheckBox]=useState(
        [
            {
                id:1,
                name:"2 Star",
                isChecked:false
            },
            {
                id:2,
                name:"3 Star",
                isChecked:false
            },
            {
                id:3,
                name:"3+ Star",
                isChecked:false
            }
        ]
    );
 
   const handleCostChange=(index)=>
   {
     let newCostCheckBox=[...costCheckBox];
     if(newCostCheckBox[index-1].isChecked===true)
     {
        newCostCheckBox[index-1].isChecked=false;
     }else{
        for(var i=0;i<3;i++)
        {
            newCostCheckBox[i].isChecked=false
        }
        newCostCheckBox[index-1].isChecked=true;
     }

     setCostCheckBox(newCostCheckBox);
   }

   const handleStarChange=(index)=>
   {
     let newStarCheckBox=[...starCheckBox];
     if(newStarCheckBox[index-1].isChecked===true)
     {
        newStarCheckBox[index-1].isChecked=false;
     }else{
        for(var i=0;i<3;i++)
        {
            newStarCheckBox[i].isChecked=false;
        }
        newStarCheckBox[index-1].isChecked=true;
     }
     setStarCheckBox(newStarCheckBox);
   }
   
   const handleApplyFilter=()=>
   {
     let newShoes=DUMMY.filter((item)=>
     {
       let ok1=false;
       let ok2=false;

       if(costCheckBox[0].isChecked===true)
       {
        if(item.price>=1500 && item.price<=4000) ok1=true;
       }else if(costCheckBox[1].isChecked===true)
       {
        if(item.price>=4001 && item.price<=7000) ok1=true;
       }else if(costCheckBox[2].isChecked===true)
       {
        if(item.price>=70001) ok1=true;
       }else ok1=true;

       if(starCheckBox[0].isChecked===true)
       {
        if(item.star===2) ok2=true;
       }else if(starCheckBox[1].isChecked===true)
       {
        if(item.star===3)ok2=true;
       }else if(starCheckBox[2].isChecked===true)
       {
        if(item.star>3) ok2=true;
       }else ok2=true;

       return(ok1 && ok2);
     });

     setShoes(newShoes);
   }

   return(
    <div className={classes.left}>
    <div className={classes.filter}>
        <div className={classes.filterContainer}>
            <h1>FILTERS</h1>
        </div>

        <div className={classes.filterContainer}>
            <div className={classes.filterHeading}>Cost</div>
            <div className={classes.filterContent}>
              {
                costCheckBox.map((item)=>
                {
                   return(
                   <div className={classes.filterContentInner}
                   key={`check_box_${item.id}`}
                   >
                    <input
                    type="checkbox"
                    key={`check_box_${item.id}`}
                    checked={item.isChecked}
                    onChange={()=>handleCostChange(item.id)}
                    />{item.name}
                    </div>
                    );
                })
              }
            </div>
        </div>

        <div className={classes.filterContainer}>
            <div className={classes.filterHeading}>Stars</div>
            <div className={classes.filterContent}>
              {
                starCheckBox.map((item)=>
                {
                   return(<div className={classes.filterContentInner}
                    key={`star_box_${item.id}`
                }><input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={()=>handleStarChange(item.id)}
                    />{item.name}</div>);
                })
              }
            </div>
        </div>

        <div className={classes.filterContainer} style={{textAlign:"center"}}>
            <button onClick={handleApplyFilter}>Apply</button>
        </div>

    </div>
    <div className={classes.shoes}>
        <div className={classes.shoesUpper}></div>
        <div className={classes.shoesLower}>
            {
                shoes.map((item)=>
                {
                    return(
                    <Link to={`shoes/${item.id}`} key={item.id}>
                    <MiniCard
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    star={item.star}
                    />
                    </Link>);
                })
            }
        </div>
    </div>
</div>
   );

}

export default FilterPane;