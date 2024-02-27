import "./styles/bootstrap.css";
import "./styles/grid.css"
import Card from "./Card";
import get from "./get"
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function ShopPage(){
  const [itemList, setItemList] = useState([]);
  const [updateCartItems, dontUse] = useOutletContext();

  useEffect(() => {
    async function fetchData() {
      const response = await get('https://fakestoreapi.com/products');
      setItemList(response);
    }
    fetchData();
  }, []);

  const items = itemList.map((e)=>{
    return <Card item={e} key={e.id} updateCartItems={updateCartItems}/>
  })

  return(
      <div className="bg-primary customgrid">
          {items}
      </div>
  )
}

export default ShopPage;