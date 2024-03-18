import React from 'react'
import './Cart.css'
//import { cart } from '../../data'
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import CartItem from './CartItem/CartItem';


export default function Cart() {
  const cart = useSelector((state)=>state.cartlist);
  const dispatch = useDispatch();
  return (
    <div className='cart'>
      <h1>Cart</h1>
      <ul className='cart__list'>
        {cart.map((item)=>(
          <>
            <CartItem item={item}></CartItem>
          </>
        ))}
      </ul>
    </div>
  )
}
