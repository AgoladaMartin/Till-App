'use client'
import { useState } from 'react'
import Keyboard from '../components/Keyboard'
import PayOptions from '../components/PayOptions'
import Products from '../components/Products'
import Total from '../components/Total'
import './payment.css'


const Payment = () => {
  //Creamos un estado para cada método de pago y los enviamos por props
  const [cash, setCash] = useState()
  const [card, setCard] = useState()
  //Creamos un estado que oculta los botones de forma de pago cuando se elija uno
  const [className, setClassName] = useState('payOptions-button')
  const [close, setClose] = useState(false)
  return (
    <div id='payment'>
      <Products></Products>
      <Keyboard payment={true} cash={cash}></Keyboard>
      <Total cash={cash} card={card} setClassName={setClassName} setCard={setCard} setCash={setCash} close={close} setClose={setClose}></Total>
      <PayOptions setCash={setCash}  setCard={setCard} className={className} setClassName={setClassName} setClose={setClose}></PayOptions>
    </div>
  )
}

export default Payment