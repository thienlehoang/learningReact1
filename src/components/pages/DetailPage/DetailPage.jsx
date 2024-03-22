import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pizzaData } from '../../../data';
import './DetailPage.css'

function DetailPage() {
  const {id} =useParams();
  const [info,setInfo]=useState();
  const [price,setPrice]= useState(0);
  useEffect(()=>{
    setInfo(pizzaData.filter(item=>item.id==id)[0]);
  },[])
  console.log(info);
  return (
    <div className='detail'>
      <div className='detail__left'>
        <img src={`/${info?.photoName}`}alt={info?.name}></img>
        <h1>{info?.price[price]}$</h1>
      </div>
      <div className='detail__right'>
        <h2>{info.name}</h2>
      </div>
    </div>
  )
}

export default DetailPage
