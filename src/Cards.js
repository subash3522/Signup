import React, {useState,useEffect} from "react";
import Prdt from './Prdt'

function Cards(props) {


  return (
    <>
    <div>
      Name:{props.cname} <br />
      <button onClick={()=>props.increaseQuantity()}>+</button>
      Quantity:{props.qty}
      <button onClick={()=>props.decreaseQuantity()}>-</button>
      Price:{props.cprice}
      <button onClick={()=>props.remove(props.ky)}>Delete</button>
      
    </div>
    <Prdt/>
    </>
  );
}

export default Cards;
