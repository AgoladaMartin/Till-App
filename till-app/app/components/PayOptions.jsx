import React from 'react'
import Link from 'next/link'
import './payOptions.css'



const PayOptions = (props) => {
  const {setCash,setCard}=props
  const selectPaymentMode = (mode) =>{
    if (mode === 'cash') {setCash(true)}
    else setCard(true)
  }
  return (<div id='pay-options'>
    <Link id='back-link' href={'/'}  > <button id='back-button' className='payOptions-button'>Volver</button> </Link>
    <button id='cash-button' className='payOptions-button' onClick={()=> selectPaymentMode('cash')}>Efectivo</button> 
    <button id='card-button' className='payOptions-button' >Tarjeta</button> 
  </div>
  )
}

export default PayOptions