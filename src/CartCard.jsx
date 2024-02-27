import "./styles/bootstrap.css";
import PropTypes from "prop-types";

function CartCard({item}){
  return(
    <div style={{width: "23rem", height: "23rem"}} className="bg-secondary d-flex flex-column justify-content-between">
      <h4>{item.title.slice(0, 25) + "..."}</h4>
      <img src={item.image} alt="product picture" height="50%"/>
      <div>
        <p>Amount: {item.amount}</p>
        <p>Price: {item.price}€</p>
        <p>Sum: {(item.price * item.amount).toFixed(2)}€</p>
      </div>
    </div>
  )
}

CartCard.propTypes = {
  item: PropTypes.object,
}

export default CartCard;

