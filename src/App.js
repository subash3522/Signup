import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Cards from "./Cards";
import Navbar from "./Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const fruits = [
    { id: 1, name: "apple", price: 10000 },
    { id: 2, name: "banana", price: 20000 },
  ];

  const [cartItems, setcartItems] = useState([]);

  //new

  const [grand, setgrand] = useState(0);

  const [qty, setquantity] = useState(cartItems.quantity);

  const increaseQuantity = () => {
    setquantity((a) => a + 1);
    setgrand(grandTotal());
  };

  const decreaseQuantity = () => {
    if (qty > 0) {
      setquantity((a) => a - 1);
    } else {
      setquantity(0);
    }
    setgrand(grandTotal());
  };

  const grandTotal = () => {
    let a = 0;
    for (let index = 0; index < cartItems.length; index++) {
      const total = cartItems[index].price * cartItems[index].quantity;
      a = total + a;
    }
    return a;
  };
  //newclose

  const handleAddToCart = (product) => {
    const indexChecker = cartItems.findIndex((item) => item.id === product.id);

    if (indexChecker !== -1) {
      const newcartItems = [...cartItems];
      // newcartItems[indexChecker].quantity += 1;
      alert("already selected");
      setcartItems(newcartItems);
    } else {
      setcartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setgrand(grandTotal());
  };

  const remove = (key) => {
    const updateCartItems = [...cartItems];
    updateCartItems.splice(key, 1);
    setcartItems(updateCartItems);
  };

  return (
    <>
      {fruits.map((product) => (
        <Cart
          key={product.id}
          name={product.name}
          price={product.price}
          product={product}
          handleAddToCart={handleAddToCart}
        />
        ))}
        
      {cartItems.map((cartitem, index) => (
        <Cards
          key={cartitem.id}
          ky={index}
          cname={cartitem.name}
          cprice={cartitem.price}
          id={cartitem.id}
          cquantity={cartitem.quantity}
          remove={remove}
          cartItems={cartItems}
          qty={qty}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}

      <Router>
        <Routes>
        <Route path="/about" element={<div>HOmepage</div>}></Route>
        </Routes>
      </Router>

      <span className="fornum">GrandTotal:{grand}</span>
    </>
  );
}

export default App;
