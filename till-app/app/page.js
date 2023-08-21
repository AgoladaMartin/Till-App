'use client'
import {useState} from 'react'
import Products from './components/Products'
import Total from './components/Total'
import Keyboard from './components/Keyboard'
import PayButton from './components/PayButton'

export default function Home() {

  const [code, setCode] = useState('')
  const [productList, setProductList] = useState([])
  return (
    <div id='main'>
      <Products  ></Products>
      <Keyboard  code={code} setCode={setCode} ></Keyboard>
      <Total ></Total>
      <PayButton  code={code} setCode={setCode} ></PayButton>
    </div>
  )
}
