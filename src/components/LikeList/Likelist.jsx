import { useState, useEffect } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { pizzaData } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../common/Pagination/Pagination";
class pagihandle {
  constructor() {

  }
  handlePagi() {

  }
}
export default function PizzaLikeList({ }) {
  //const [likedList, setLikeList] = useState(likeList);
  const dispatch = useDispatch();
  const likelist = useSelector((state) => state.likelist);

  //handlePagi
  const itemPerPage = 2;
  const [page, setPage] = useState(1);
  const likeListRender = likelist.slice(
    (page - 1) * itemPerPage,
    (page - 1) * itemPerPage + itemPerPage
  );
  if (likelist.length <= Number(page) * itemPerPage - itemPerPage) {
    setPage(page - 1);
  }

  function handlePageParent(page) {
    setPage(page);
  }
  function handleLikeList(removeId) {
    dispatch({
      type: "deletelikelist",
      id: removeId,
    });
  }
  return (
    <>
      <h2 className="title">Favorite</h2>
      {likelist.length > 0 ? (
        <>
          <ul className="pizzas">
            {likeListRender.map((item) => (
              <>
                <LikeItem
                  key={item.id}
                  pizzaId={item.idPizza}
                  removeLike={handleLikeList}
                ></LikeItem>
              </>
            ))}
          </ul>
          <Pagination
            itemPerPage={itemPerPage}
            page={page}
            handlePage={handlePageParent}
            total={likelist.length}
          ></Pagination>
        </>
      ) : (
        <div style={{ marginTop: "10px", fontStyle: "italic" }}>
          No product in like list now.
        </div>
      )}
    </>
  );
}

export function LikeItem({ pizzaId, removeLike }) {
  const [info, setInfo] = useState({});
  const [hover, setHover] = useState(false)
  useEffect(() => {
    let array = pizzaData.filter((pizza) => pizza.id == pizzaId);
    setInfo(array[0]);
  }, [pizzaId]);

  // có thể dispatch ngay tại đây để remove pizza. 
  function handleRemove() {
    removeLike(pizzaId);
  }
  function handleEnter() {
    setHover(prev => !prev)
  }
  return (
    <>
      <li onMouseEnter={() => handleEnter()} key={info?.id} className={`pizza ${info?.count <= 0 ? "sold-out" : ""}`}>
        <div className="pizza__left">
          <img src={info.photoName} alt={info.name}></img>
          <AiOutlineDislike
            className="likeIcon like icon"
            onClick={handleRemove}
          ></AiOutlineDislike>
        </div>
        <div className="pizza__right">
          <h3>{info?.name}</h3>
          <p>{info?.ingredients}</p>
          <span>{info.price ? info.price[0] : ''}</span>
        </div>
      </li>
    </>
  );
}
