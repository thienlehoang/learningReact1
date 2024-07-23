import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartPage.css";
import { GoTrash, GoPlusCircle } from "react-icons/go";
import Button from "../../../common/Button/Button";
import PizzaLikeList from "../../LikeList/Likelist";
import { Link } from "react-router-dom";
import Pagination from "../../../common/Pagination/Pagination";
import Header from "../../../common/Header/Header";
import { updateCart } from "../../../actions/cartActions";
import { AiOutlineMinusCircle } from "react-icons/ai";

function CartPage() {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cartlist);
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
  const [cart, setCart] = useState(cartSelector);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(cartSelector);
  }, [cartSelector]);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
      }, 0),
    );
  }, [cart]);
  //handlePagi
  const itemPerPage = 2;
  const [page, setPage] = useState(1);
  function handlePageParent(page) {
    setPage(page);
  }

  const handleCart = (index, action) => {
    if (action == "plus") {
      setCart((prev) => {
        return prev.map((item, ind) => {
          if (ind == index) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      });
    } else if (action == "minus") {
      setCart((prev) => {
        return prev.map((item, ind) => {
          if (ind == index) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      });
    } else if (action == "delete") {
      setCart((prev) => {
        return prev.filter((item, ind) => {
          return ind != index;
        });
      });
    }

  };

  const handleUpdateCart = async () => {
    await dispatch(updateCart(cart));
  };

  return (
    <>
      <div className="container py-20">
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
            {cart.map((item, index) => (
              <tr>
                <td className="c-10">
                  <GoTrash
                    onClick={() => handleCart(index, "delete")}
                    className="icon"
                  ></GoTrash>
                </td>
                <td className="c-10">
                  <img src={item.photoName} alt={item.name}></img>
                </td>
                <td className="c-30">{item.name}</td>
                <td className="c-10">{item.price}$</td>
                <td className="c-20">
                  <div className="flex h-10 w-10 w-full items-center justify-center">
                    <AiOutlineMinusCircle
                      onClick={() => handleCart(index, "minus")}
                      className="icon-medium"
                    ></AiOutlineMinusCircle>
                    <span className="mx-2">{item?.quantity}</span>
                    <GoPlusCircle
                      onClick={() => handleCart(index, "plus")}
                      className="icon-medium"
                    ></GoPlusCircle>
                  </div>
                </td>
                <td className="c-10">{item.quantity * item.price}$</td>
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
                <Button className="btnOrder" click={() => handleUpdateCart()}>
                  Update Cart
                </Button>
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
          <Button
            className="btnOrder"
            style={{ display: "block", marginTop: "1rem", marginLeft: "auto" }}
          >
            <Link to={`/${user?._id}/checkout`}>Proceed to Checkout</Link>
          </Button>
        </div>

        <Line></Line>
        <PizzaLikeList></PizzaLikeList>
      </div>
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
