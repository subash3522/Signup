import React from "react";

function Cart(props) {
  return (
    <div>
      Name:{props.name} <br />
      Price:{props.price} <br />
      <button onClick={() => props.handleAddToCart(props.product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
