import "./styles/bootstrap.css";
import "./styles/grid.css"
import CartCard from "./CartCard";
import PropTypes from "prop-types"
import { useOutletContext } from "react-router-dom";
import sumPrice from "./sumPrice";

function CartPage(){
  const [dontUse, cartItems] = useOutletContext();

  const items = cartItems.map((e)=>{
    return <CartCard item={e} key={e.id}/>
  });

  return(
    <div className="bg-primary customgrid-container">
      <div className="bg-primary customgrid">
          {items}
      </div>
      <button className="checkoutButton">Checkout ({sumPrice(cartItems)}€)</button>
    </div>
  )
}

CartPage.propTypes = {
  updateCartItems: PropTypes.func,
}

export default CartPage;