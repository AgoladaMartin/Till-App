'use client'
import React, { useState } from 'react'
import Products from '../components/Products'
import Keyboard from '../components/Keyboard'
import Total from '../components/Total'
import PayOptions from '../components/PayOptions'
import './payment.css'


const Payment = () => {
  //Creamos un estado para cada método de pago y los enviamos por props
  const [cash, setCash] = useState()
  const [card, setCard] = useState()
  return (
    <div id='payment'>
      <Products></Products>
      <Keyboard payment={true} cash={cash}></Keyboard>
      <Total></Total>
      <PayOptions cash={cash} setCash={setCash} card={card} setCard={setCard} ></PayOptions>
    </div>
  )
}

export default Payment