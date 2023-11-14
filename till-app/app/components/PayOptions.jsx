import React, { useState } from 'react'
import Link from 'next/link'
import './payOptions.css'



const PayOptions = (props) => {
  //Recibimos las funciones para setear el método de pago elegido
  const {setCash,setCard}=props

  //Creamos un estado que oculta los botones de forma de pago cuando se elija uno
  const [className, setClassName] = useState('payOptions-button')

  //Función que setea el método de pago elegido y oculta los botones
  const selectPaymentMode = (mode) =>{
    if (mode === 'cash') {setCash(true)}
    else {setCard(true)
      alert('Pago con tarjeta por implementar')
    }
   setClassName('payOptions-button-hidden')
  }
  return (<div id='pay-options'>
    <Link id='back-link' href={'/'}  > <button id='back-button' className='payOptions-button'>Volver</button> </Link>
    <button id='cash-button'  className={className} onClick={()=> selectPaymentMode('cash')}>Efectivo</button> 
    <button id='card-button'  className={className} onClick={()=> selectPaymentMode('card')} >Tarjeta</button> 
  </div>
  )
}

export default PayOptions