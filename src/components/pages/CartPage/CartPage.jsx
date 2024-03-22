import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartPage.css";
import { GoTrash } from "react-icons/go";
import Button from "../../../common/Button/Button";
import PizzaLikeList from "../../LikeList/Likelist";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination/Pagination";

function CartPage() {
  const cart = useSelector((state) => state.cartlist);
  var totalPrice = cart.reduce((acc,cur)=>{
    return acc+ (cur.price[0]*cur.count);
  },0)
  //handlePagi
  const itemPerPage = 2;
  const [page, setPage] = useState(1);
  const cartRender = cart.slice(
    (page - 1) * itemPerPage,
    (page - 1) * itemPerPage + itemPerPage
  );
  
  if (cart.length <= Number(page) * itemPerPage - itemPerPage) {
    setPage(page - 1);
  }
  function handlePageParent(page) {
    setPage(page);
  }

  const dispatch = useDispatch();
  return (
    <>
      <h2 className="title">Cart</h2>
      <div className="cart__wrap">
        <table className="cart__table">
          <tr>
            <th className="c-5"></th>
            <th className="c-20"></th>
            <th className="c-30">Product</th>
            <th className="c-10">Price</th>
            <th className="c-20">Quantity</th>
            <th className="c-10">Total</th>
          </tr>
          {cartRender.map((item) => (
            <tr>
              <td className="c-10">
                <GoTrash
                  onClick={() =>
                    dispatch({
                      type: "deletecart",
                      id: item.id,
                    })
                  }
                  className="icon"
                ></GoTrash>
              </td>
              <td className="c-10">
                <img src={item.photoName} alt={item.name}></img>
              </td>
              <td className="c-30">{item.name}</td>
              <td className="c-10">{item.price[0]}$</td>
              <td className="c-20">{item.count}</td>
              <td className="c-10">{item.count * item.price[0]}$</td>
            </tr>
          ))}
        </table>
        {cart.length === 0 && (
          <div style={{ marginTop: "10px", fontStyle: "italic" }}>
            No product in cart now. Please order.
          </div>
        )}
        <table className="coupon__table">
          <tr className="coupon">
            <div className="coupon__left">
              <input type="text" placeholder="Coupon code"></input>
              <Button className="btnOrder">Apply Coupon</Button>
            </div>
            <div className="coupon__right">
              <Button className="btnOrder">Update Cart</Button>
            </div>
          </tr>
        </table>
      </div>
      <Pagination
        itemPerPage={itemPerPage}
        page={page}
        handlePage={handlePageParent}
        total={cart.length}
      ></Pagination>
      <div className="cart__total">
        <h2>Cart Totals</h2>
        <table className="cart__total-table">
          <tr>
            <th>Total</th>
            <td>{totalPrice}$</td>
          </tr>
        </table>
        <Button className="btnOrder" style={{display:"block",marginTop:"1rem",marginLeft:"auto"}}>
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>

      <Line></Line>
      <PizzaLikeList></PizzaLikeList>
    </>
  );
}

function Line() {
  return (
    <>
      <div className="line"></div>
    </>
  );
}

export default CartPage;
