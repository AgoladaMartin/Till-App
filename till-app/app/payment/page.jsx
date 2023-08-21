'use client'
import React from 'react'
import Products from '../components/Products'
import Keyboard from '../components/Keyboard'
import Total from '../components/Total'

const Payment = () => {
  return (
    <div id='payment'>
    <Products></Products>
      <Keyboard ></Keyboard>
      <Total></Total>
      </div>
  )
}

export default Payment