import "./styles/bootstrap.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Card({item, updateCartItems}){
  const [amount, setAmount] = useState(0)
  return(
    <div style={{width: "23rem", height: "23rem"}} className="bg-secondary d-flex flex-column justify-content-between">
      <h4>{item.title.slice(0, 25) + "..."}</h4>
      <img src={item.image} alt="product picture" height="50%"/>
      <div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" name="" id="amount" value={amount} onChange={(e)=>{
            let newAmount = e.target.value;
            e.target.value = 0;
            setAmount(newAmount);
          }}/>
        </div>
        <p>Price: {item.price}€</p>
        <button onClick={()=>{
          if(amount == 0) return;
          let newItem = {...item}
          newItem.amount = +amount;
          updateCartItems(newItem);
          setAmount(0);
        }}>Add to Cart</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object,
  updateCartItems: PropTypes.func,
}

export default Card;

