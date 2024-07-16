import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
function CartItem({ item }) {
  const dispatch =useDispatch();
  function handleCount(action){
    if(action=='plus'){
      const updateItem={...item,count:item.count+1}
      dispatch({
        type:'updatecart',
        item:updateItem
      })
    } else if(action=='minus'){
      if(item.count==1){
        dispatch({
          type:'deletecart',
          id:item.id
        })
      } else {
        const updateItem={...item,'count':item.count-1};
        dispatch({
          type:'updatecart',
          item:updateItem
        });
      }
    }
  }
  return (
    <>
      <li className="cart__item">
        <div className="cart__item-top">
          <div className="cart__item-count">
            <AiOutlineMinusCircle onClick={()=>handleCount('minus')} className="icon-medium"></AiOutlineMinusCircle>
            <span>{item?.quantity}</span>
            <GoPlusCircle onClick={()=>handleCount('plus')} className="icon-medium"></GoPlusCircle>
          </div>
          <div className="cart__item-name">{item?.name}</div>
          <div>{item?.price}$</div>
        </div>
      </li>
    </>
  );
}

export default CartItem;
