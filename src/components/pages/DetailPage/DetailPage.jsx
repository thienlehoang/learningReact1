import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pizzaData } from "../../../data";
import "./DetailPage.css";
import Button from "../../../common/Button/Button";
import { useDispatch } from "react-redux";
import Header from "../../../common/Header/Header";
import { addToCart } from "../../../actions/cartActions";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [info, setInfo] = useState();
  const [price, setPrice] = useState(0);
  function handleSize(s) {
    setPrice(s);
  }

  async function getData(id){
    try {
      const data=await fetch(`http://localhost:4000/api/v1/pizza/pizzaList/${id}`);
      const response = await data.json()
      setInfo({...response.data});
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // get data từ server bằng id (  sau này có server )
    getData(id);
  }, []);
  function handleAddtoCart() {
    dispatch(addToCart({pizzaId: id,quantity:1,price:info?.price[price]}))
    //navigate('/cart')
  }

  //move to menu screen when press ESC
  useEffect(()=>{
    function handleEscape(e){
      if(e.key=='Escape'){
        navigate('/menu');
      }
    }
    window.addEventListener('keydown',(e)=>handleEscape(e))
    return ()=>{
      //remove when component unmount
      window.removeEventListener('keydown',handleEscape)
    }
  },[])
  return (
    <>
      <div className="contianer py-20">
        <div className="detail">
          <div className="detail__left">
            <img src={info?.photoName} alt={info?.name}></img>
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
                      <li
                        onClick={() => handleSize(0)}
                        className="option__item"
                      >
                        <Button
                          className={
                            "btnOrder" + (price == 0 ? " ordered" : "")
                          }
                        >
                          Small
                        </Button>
                      </li>
                      <li
                        onClick={() => handleSize(1)}
                        className="option__item"
                      >
                        <Button
                          className={
                            "btnOrder" + (price == 1 ? " ordered" : "")
                          }
                        >
                          Medium +3$
                        </Button>
                      </li>
                      <li
                        onClick={() => handleSize(2)}
                        className="option__item"
                      >
                        <Button
                          className={
                            "btnOrder" + (price == 2 ? " ordered" : "")
                          }
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
      </div>
    </>
  );
}

export default DetailPage;
