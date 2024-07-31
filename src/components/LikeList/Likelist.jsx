import { useState, useEffect } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { pizzaData } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../common/Pagination/Pagination";
import { getLikeList, deleteFromLikeList } from "../../actions/likeListAction";
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

  useEffect(()=>{
    dispatch(getLikeList());
  },[])

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
    dispatch(deleteFromLikeList(removeId));
  }
  return (
    <>
      <h2 className="title">Favorite</h2>
      {likelist.length > 0 ? (
        <>
          <ul className="pizzas">
            {likelist.map((item) => (
              <>
                <LikeItem
                  key={item.id}
                  info={item}
                  removeLike={handleLikeList}
                ></LikeItem>
              </>
            ))}
          </ul>
          {/*<Pagination
            itemPerPage={itemPerPage}
            page={page}
            handlePage={handlePageParent}
            total={likelist.length}
          ></Pagination>*/}
        </>
      ) : (
        <div style={{ marginTop: "10px", fontStyle: "italic" }}>
          No product in like list now.
        </div>
      )}
    </>
  );
}

export function LikeItem({ info, removeLike }) {
  const [hover, setHover] = useState(false)

  // có thể dispatch ngay tại đây để remove pizza. 
  function handleRemove() {
    removeLike(info.pizzaId);
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
