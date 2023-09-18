'use client'
import React, { useState } from 'react'
import Products from '../components/Products'
import Keyboard from '../components/Keyboard'
import Total from '../components/Total'
import Back from '../components/BackButton'
import './payment.css'


const Payment = () => {
  const [cash, setCash] = useState()
  const [card, setCard] = useState()
  return (
    <div id='payment'>
      <Products></Products>
      <Keyboard payment={true} cash={cash}></Keyboard>
      <Total></Total>
      <Back cash={cash} setCash={setCash} card={card} setCard={setCard} ></Back>
    </div>
  )
}

export default Payment