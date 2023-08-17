import { React, useEffect } from 'react';

const Total = (props) => {
  const {productList} = props
  let amount
  const totalAmount = (productList) => {
    if (productList) {
      amount = productList.reduce((acumulate, currentValue)=> acumulate + parseFloat(currentValue.price), 0).toFixed(2)
      
      return amount
      }
    
    console.log(amount, 'outside');
    return amount = 0
  }

  totalAmount(productList)

  return (
    <div id='total'>
    <p>Total ({productList.length}) : {amount}
    </p>
      <hr></hr>
    <p>Importe Pagado :  0.00</p>
    <hr></hr>
    <p style={{color:"red"}}>Importe Pendiente : {amount}</p>
    <hr></hr>
    </div>
    
  )
}

export default Total