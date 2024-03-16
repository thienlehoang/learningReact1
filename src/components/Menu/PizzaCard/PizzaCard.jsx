import React, { useEffect, useState } from 'react'
import "./PizzaCard.css"
import { FcLike } from "react-icons/fc";
import { AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
//import { FcLike } from "react-icons/fc";
export default function PizzaCard(props) {
  const {info} =  props;
  const [like,setLike]=useState(false);
  const likelist = useSelector((state)=>state.likelist);
  const dispatch = useDispatch();
  useEffect(()=>{
    setLike(likelist.find((item)=>item.idPizza==info.id));
  },[likelist])
  function handleLike(e){
    e.preventDefault();
    setLike((prev)=>!prev);
    dispatch({
      type:'addlikelist',
      payload:info.id
    })
  }
  return (
      <>
      <li key={info?.id} className={`pizza ${info?.soldOut ? "sold-out" : ""}`}>
        <div className='pizza__left'>
          <img src={info.photoName} alt={info.name}></img>
          {
            like ? 
            <FcLike style={{opacity:.8}} className='likeIcon' onClick={(e)=>handleLike(e)} /> : 
            <AiOutlineLike  className='likeIcon like' onClick={(e)=>handleLike(e)}></AiOutlineLike>
          }
          
        </div>
        <div className='pizza__right'>
          <h3>{info?.name}</h3>
          <p>{info?.ingredients}</p>
          <span>{info?.price}</span>
        </div>
      </li>
    </>
  )
}
