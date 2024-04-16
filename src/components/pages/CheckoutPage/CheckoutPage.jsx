import React from 'react'
import './CheckoutPage.css'
import Header from '../../Header/Header'
import Button from '../../../common/Button/Button'
function CheckoutPage() {
  return (
    <div className=''>
      <Header/>
      <div className='about z-10 text-white py-20 text-center text-black'>
        <div className='title mr-auto ml-auto text-black'>About us</div>
        <div className='flex justify-between w-4/5 mx-auto mt-20'>
          <div className='flex flex-col shrink grow basis-1/2 text-left justify-center'>
            <div className='title text-black text-sm'>about us</div>
            <h2 className='mt-6'>Quality and Tradition</h2>
            <span className='mt-6'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many desktop publishing packages.</span>
            <img src='./assets/signature.png' className='w-64 h-64 object-contain mt-6'></img>
            <Button className="btnOrder w-fit">See more</Button>
          </div>
          <div className='shrink grow basis-1/2'>
            <img src='./assets/about1.png'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
