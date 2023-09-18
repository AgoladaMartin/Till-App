'use client'
import {useState} from 'react'
import Products from './components/Products'
import Total from './components/Total'
import Keyboard from './components/Keyboard'
import PayButton from './components/PayButton'

export default function Home() {

 
  
  return (
    <div id='main'>
      <Products  ></Products>
      <Keyboard ></Keyboard>
      <Total ></Total>
      <PayButton  ></PayButton>
    </div>
  )
}
