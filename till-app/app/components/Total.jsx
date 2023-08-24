import { React, useEffect } from 'react';
import useStore from '../store/store';

const Total = () => {
  //Accedemos a la lista de productos para poder sumar los totales
  const {productList} = useStore((state) => state);
  const {paidAmount} = useStore((state) => state);



  let amount
  let remainingAmount
  const totalAmount = (productList) => {
    if (productList) {
      amount = productList.reduce((acumulate, currentValue)=> acumulate + parseFloat(currentValue.price), 0).toFixed(2)
      remainingAmount = Number((amount-paidAmount)).toFixed(2)
      return (amount,remainingAmount)
      }
    return amount = 0
  }

  totalAmount(productList)

  return (
    <div id='total'>
    <p>Total ({productList.length}) : {amount}
    </p>
      <hr></hr>
    <p>Importe Pagado :  {paidAmount}</p>
    <hr></hr>
    <p style={{color:"red"}}>Importe Pendiente : {remainingAmount}</p>
    <hr></hr>
    </div>
    
  )
}

export default Total