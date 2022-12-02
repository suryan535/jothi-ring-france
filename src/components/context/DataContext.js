import React from "react";
import { createContext } from "react";
import Shoe1 from "../../assets/shoe.jpg";
import Shoe2 from "../../assets/shoe2.png";

const DUMMY=[
    {
        id:1,
        image:Shoe1,
        name:"KSL 01",
        price:2000,
        star:4
    },
    {
        id:2,
        image:Shoe2,
        name:"KSW 01",
        price:2500,
        star:3.5
    },
    {
        id:3,
        image:Shoe1,
        name:"Royal S01",
        price:6000,
        star:1
    },
    {
        id:4,
        image:Shoe2,
        name:"KWL 01",
        price:2000,
        star:2
    },
    {
        id:5,
        image:Shoe1,
        name:"KSW 01",
        price:2500,
        star:4
    },
    {
        id:6,
        image:Shoe2,
        name:"Royal S01",
        price:6000,
        star:3
    }
  ];

  const DataContext=createContext(DUMMY);
  export default DataContext;