import React,{useContext, useState} from "react";
import classes from "./Store.module.css";
import {Routes,Route} from "react-router-dom";
import FilterPane from "./FilterPane";
import DataContext from "../context/DataContext";
import MiniCard from "./MiniCard";
import Cancel from "../../assets/cancel.png";
import Shoe from "./Shoe";

const Store=()=>
{
    const [cart,setCart]=useState([]);
    const DUMMY=useContext(DataContext);

    const handleAddCart=(index)=>
    {
      
      let newCart=[];
      for(let i=0;i<cart.length;i++)
      {
        newCart.push(cart[i]);
      }

      let present=false;

      for(let i=0;i<newCart.length;i++)
      {
        if(newCart[i].id===index)
        {
            present=true;
            break;
        }
      }

      if(present===false)
      {
        for(let i=0;i<DUMMY.length;i++)
        {
            if(DUMMY[i].id===index)
            {
                newCart.push(DUMMY[i]);
                break;
            }
        }
      }

      setCart(newCart);
    }

    const removeCartHandler=(index)=>
    {
        let newCart=cart.filter((item)=>item.id!==index);
        setCart(newCart);
    }


    return(
       <div className={classes.outer}>
            <Routes>
                <Route index element={<FilterPane/>}></Route>
                <Route path="shoes/:pid" element={<Shoe addCart={handleAddCart} />}></Route>
            </Routes>
        <div className={classes.right}>
            <h1>Checkout</h1>
            {
                cart.length===0?
                <h2>Whats stopping you, designer?</h2>:
                cart.map((item)=>
                {
                    return(
                        <div className={classes.cartItems}>
                    <MiniCard
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    star={item.star}
                    />
                    <img src={Cancel} onClick={()=>removeCartHandler(item.id)}style={{width:"40px",height:"40px"}}></img>
                    </div>
                    );
                })
                
            }
            <button disabled={cart.length===0} className="button-3" onClick={()=>alert("Hurray Order Succesful!!")}>Order Now</button>
        </div>
       </div>
    );
} 

export default Store;