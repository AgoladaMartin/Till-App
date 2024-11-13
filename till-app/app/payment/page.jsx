'use client'
import { useState } from 'react'
import Card from '../components/Card'
import Keyboard from '../components/Keyboard'
import PayOptions from '../components/PayOptions'
import Products from '../components/Products'
import Total from '../components/Total'
import './payment.css'


const Payment = () => {
  //Creamos un estado para cada método de pago y los enviamos por props
  const [cash, setCash] = useState()
  const [card, setCard] = useState()
  return (
    <div id='payment'>
      <Products></Products>
      <Keyboard payment={true} cash={cash}></Keyboard>
      <Total cash={cash} card={card}></Total>
      <PayOptions cash={cash} setCash={setCash} card={card} setCard={setCard} ></PayOptions>
      <Card opened={card}></Card>
    </div>
  )
}

export default Payment