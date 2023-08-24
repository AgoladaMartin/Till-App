'use client'
import React from 'react'
import Products from '../components/Products'
import Keyboard from '../components/Keyboard'
import Total from '../components/Total'
import Back from '../components/Back'
import './payment.css'


const Payment = () => {
  return (
    <div id='payment'>
      <Products></Products>
      <Keyboard payment= {true}></Keyboard>
      <Total></Total>
      <Back></Back>
    </div>
  )
}

export default Payment