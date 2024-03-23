import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pizzaData } from "../../../data";
import "./DetailPage.css";
import Button from "../../../common/Button/Button";
import { useDispatch } from "react-redux";

function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [info, setInfo] = useState();
  const [price, setPrice] = useState(0);
  function handleSize(s) {
    setPrice(s);
  }
  useEffect(() => {
    // get data từ server bằng id (  sau này có server )
    setInfo(pizzaData.filter((item) => item.id == id)[0]);
  }, []);
  function handleAddtoCart() {
    dispatch({
      type: "addcart",
      payload: {...info,price:info.price[price]},
    });
  }
  return (
    <div className="detail">
      <div className="detail__left">
        <img src={`/${info?.photoName}`} alt={info?.name}></img>
        <h1>{info?.price[price]}$</h1>
      </div>
      <div className="detail__right">
        <h2>{info?.name}</h2>
        <div className="ingredient">{info?.ingredients}</div>
        <div className="attribute">
          <dl>
            <div className="size">
              <dt>Size</dt>
              <dd>
                <ul className="option__list">
                  <li onClick={() => handleSize(0)} className="option__item">
                    <Button
                      className={"btnOrder" + (price == 0 ? " ordered" : "")}
                    >
                      Small
                    </Button>
                  </li>
                  <li onClick={() => handleSize(1)} className="option__item">
                    <Button
                      className={"btnOrder" + (price == 1 ? " ordered" : "")}
                    >
                      Medium +3$
                    </Button>
                  </li>
                  <li onClick={() => handleSize(2)} className="option__item">
                    <Button
                      className={"btnOrder" + (price == 2 ? " ordered" : "")}
                    >
                      Large +5$
                    </Button>
                  </li>
                </ul>
              </dd>
              <dt>Note</dt>
              <textarea type="text" placeholder="Note here"></textarea>
            </div>
            <div className="note"></div>
          </dl>
        </div>
        <div onClick={() => handleAddtoCart()}>
          <Button style={{ width: "100%" }} className="btnOrder">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
