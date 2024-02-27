"use strict";

export default function sumPrice(cartItems){
  let sum = 0;
  cartItems.forEach((item)=>{
    sum += (item.price * item.amount);
  });
  sum = sum.toFixed(2);
  return sum;
}