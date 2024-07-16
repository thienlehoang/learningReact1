import React from "react";
import "./Cart.css";
//import { cart } from '../../data'
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

export default function Cart({ visible }) {
  const cart = useSelector((state) => state.cartlist);
  return (
    <div className={"cart " + (visible ? "visible" : "")}>
      <h1>Cart</h1>
      <ul className="cart__list">
        {cart.length == 0
          ? "No product in cart now. Please order."
          : cart.map((item) => (
              <>
                <CartItem item={item}></CartItem>
              </>
            ))}
      </ul>
      <Link to="/cart">Go to Cart Detail</Link>
    </div>
  );
}
