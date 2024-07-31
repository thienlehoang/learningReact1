import React, { useEffect, useState } from "react";
import "./PizzaCard.css";
import { FcLike } from "react-icons/fc";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToLikeList } from "../../../actions/likeListAction";
export default function PizzaCard(props) {
  const { info, handleAdding } = props;
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const likelist = useSelector((state) => state.likelist);
  const dispatch = useDispatch();
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    setLike(likelist.find((item) => item.pizzaId == info._id));
  }, [likelist]);
  function handleLike(e) {
    e.preventDefault();
    //setLike((prev) => !prev);
    dispatch(addToLikeList(info._id));
  }
  async function handleDelete(_id){
    fetch(`http://localhost:4000/api/v1/pizza/delete/${_id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: "deletePizza",
          payload: data
        })
      })
    
  }

  function gotoDetail() {
    navigate(`/detail/${info._id}`);
  }
  return (
    <>
      <li
        key={info?._id}
        className={"pizza " + (info?.count == 0 ? "sold-out" : "")}
      >
        <div className="pizza__left">
          <img
            onClick={() => gotoDetail()}
            src={info?.photoName}
            alt={info?.name}
          ></img>
          {like ? (
            <FcLike
              style={{ opacity: 0.8 }}
              className="likeIcon icon"
              onClick={(e) => handleLike(e)}
            />
          ) : (
            <AiOutlineLike
              className="likeIcon like icon"
              onClick={(e) => handleLike(e)}
            ></AiOutlineLike>
          )}
        </div>
        <div className="flex flex-col justify-between w-full">
          <h3>{info?.name}</h3>
          <p>{info?.ingredients}</p>
          <div className="flex items-center justify-between">
            <div className="w-fit">{info?.price[0]}</div>
            {user && user.role === 'admin' && (
              <div className="flex w-fit">
                <MdOutlineEdit
                  onClick={() =>
                    handleAdding('modify', true, info?._id)
                  }
                  className="icon"
                ></MdOutlineEdit>
                <GoTrash
                  onClick={() =>
                    handleDelete(info?._id)
                  }
                  className="icon"
                ></GoTrash>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
