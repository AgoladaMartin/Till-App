'use client'
import {useState} from 'react'

import Total from './components/Total'
import Keyboard from './components/Keyboard'
import Products from './components/Products'

export default function Home() {

  const [code, setCode] = useState('')
  const [productList, setProductList] = useState('')
  return (
    <div id='main'>
      <Products></Products>
      <Total></Total>
      <Keyboard  code={code} setCode={setCode}></Keyboard>
    </div>
  )
}
