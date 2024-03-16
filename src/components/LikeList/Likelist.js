import { useState,useEffect } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { pizzaData } from "../../data";
import { useSelector, useDispatch } from "react-redux";

export default function PizzaLikeList({ }) {
  //const [likedList, setLikeList] = useState(likeList);
  const likelist = useSelector((state)=>state.likelist);
  const dispatch = useDispatch();
  function handleLikeList(removeId) {
    dispatch({
      type:'deletelikelist',
      id:removeId
    })
  }
  return (
    <>
      {likelist.length > 0 && (
        <>
          <ul className="pizzas">
            {likelist.map((item) => (
              <>
                <LikeItem
                  key={item.id}
                  pizzaId={item.idPizza}
                  removeLike={handleLikeList}
                ></LikeItem>
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export function LikeItem({ pizzaId, removeLike }) {
  const [info, setInfo] = useState({});
  useEffect(() => {
    let array = pizzaData.filter((pizza) => pizza.id == pizzaId);
    setInfo(array[0]);
  }, [pizzaId]);
  function handleRemove() {
    removeLike(pizzaId);
  }
  return (
    <>
      <li key={info?.id} className={`pizza ${info?.soldOut ? "sold-out" : ""}`}>
        <div className="pizza__left">
          <img src={info.photoName} alt={info.name}></img>
          <AiOutlineDislike
            className="likeIcon"
            onClick={handleRemove}
          ></AiOutlineDislike>
        </div>
        <div className="pizza__right">
          <h3>{info?.name}</h3>
          <p>{info?.ingredients}</p>
          <span>{info?.price}</span>
        </div>
      </li>
    </>
  );
}