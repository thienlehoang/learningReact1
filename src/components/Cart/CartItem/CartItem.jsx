import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
function CartItem({item}) {
  return (
    <>
      <li className="cart__item">
        <div className="cart__item-top">
          <div className="cart__item-count">
            <GoPlusCircle></GoPlusCircle>
            <span>{item?.count}</span>
            <AiOutlineMinusCircle></AiOutlineMinusCircle>
          </div>
          <div className="cart__item-name">{item?.name}</div>
          <div>{item?.price}</div>
        </div>
      </li>
    </>
  );
}

export default CartItem;
