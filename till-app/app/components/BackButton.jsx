import React from 'react'
import Link from 'next/link'


const Back = (props) => {
  const {cash,setCash,card,setCard}=props
  const selectPaymentMode = (mode) =>{
    if (mode === 'cash') {setCash(true)}
    else setCard(true)
  }
  return (<div>
    <Link id='back-link' href={'/'}  > <button id='back-button'>Volver</button> </Link>
    <button id='cash-button'onClick={()=> selectPaymentMode('cash')}>Efectivo</button> 
    <button id='card-button'>Tarjeta</button> 
  </div>
  )
}

export default Back