import React from 'react'
import './Cart.css'
//import { cart } from '../../data'
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";


export default function Cart() {
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  console.log('likelist',cart)
  return (
    <div className='cart'>
      <h1>Cart</h1>
      <ul className='cart__list'>
        
      </ul>
    </div>
  )
}
