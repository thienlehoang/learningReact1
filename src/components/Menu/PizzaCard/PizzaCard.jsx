import React, { useEffect, useState } from "react";
import "./PizzaCard.css";
import { FcLike } from "react-icons/fc";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function PizzaCard(props) {
  const { info, handleAdding } = props;
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const likelist = useSelector((state) => state.likelist);
  const { cate, isLogined } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    setLike(likelist.find((item) => item.idPizza == info.id));
  }, [likelist]);
  function handleLike(e) {
    e.preventDefault();
    setLike((prev) => !prev);
    dispatch({
      type: "addlikelist",
      payload: info.id,
    });
  }

  function gotoDetail() {
    navigate(`/detail/${info.id}`);
  }
  return (
    <>
      <li
        key={info?.id}
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
            {isLogined && cate === 1 && (
              <div className="flex w-fit">
                <MdOutlineEdit
                  onClick={() =>
                    handleAdding('modify', true, info?.id)
                  }
                  className="icon"
                ></MdOutlineEdit>
                <GoTrash
                  onClick={() =>
                    dispatch({
                      type: "deletePizza",
                      payload: info.id
                    })
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
