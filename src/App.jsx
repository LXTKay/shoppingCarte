import { useState } from "react";
import "./styles/bootstrap.css";
import Tab from './Tab';
import { Outlet } from "react-router-dom";
import sumPrice from "./sumPrice"

function App() {
  const [cartItems, setCartItems] = useState([]);

  function updateCartItems(newItem) {
    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
  
    if (existingItemIndex !== -1) {
      // If the item exists, update its amount
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].amount += newItem.amount;
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist, add it to the cart
      setCartItems(prevCartItems => [...prevCartItems, newItem]);
    }
  }

  return (
    <div className="d-flex flex-column justify-content-start vh-100">
      <div id="tabBar" className="bg-secondary d-flex justify-content-center">
        <Tab title="Main Page" route="main"/>
        <Tab title="Shop" route="shop"/>
        <div className="d-flex">
          <Tab title="Cart" route="cart"/>
          <h2>({sumPrice(cartItems)}€)</h2>
        </div>
      </div>
      <Outlet context={[updateCartItems, cartItems]}/>
    </div>
  )
}

export default App
