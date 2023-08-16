'use client'
import {useState} from 'react'
import Products from './components/Products'
import Total from './components/Total'
import Keyboard from './components/Keyboard'

export default function Home() {

  const [code, setCode] = useState('')
  const [productList, setProductList] = useState([])
  return (
    <div id='main'>
      <Products productList={productList}></Products>
      <Total></Total>
      <Keyboard  code={code} setCode={setCode} productList={productList} setProductList={setProductList}></Keyboard>
    </div>
  )
}
