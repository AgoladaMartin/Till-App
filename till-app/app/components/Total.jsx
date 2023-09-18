import { React, useEffect, useState } from 'react';
import useStore from '../store/store';
import BasicModal from './Modal';
import './total.css'


const Total = () => {
  //Accedemos a la lista de productos para poder sumar los totales
  const {productList} = useStore((state) => state);

  //Accedemos al total pagado
  const {paidAmount} = useStore((state) => state);

  //Creamos un estado para manejar el modal
  const [open, setOpen] = useState(false)

  //Creamos variables para almacenar el total, y lo que falta por pagar.
  let amount
  let remainingAmount
  let opened
  //Función que suma el total de los productos. Si no hay productos que sumar, retorna 0
  const totalAmount = (productList) => {
    if (productList) {
      amount = productList.reduce((acumulate, currentValue)=> acumulate + parseFloat(currentValue.price), 0).toFixed(2)
      remainingAmount = Number((amount-paidAmount)).toFixed(2)
      opened = remainingAmount >= 0 ? false : true
      return (amount,remainingAmount, opened)
      }
    return amount = 0
  }
  
  //Ejecutamos la función de sumado
  totalAmount(productList)

  return (
    <div id='total'>
    <p>Total ({productList.length}) : {amount}
    </p>
      <hr></hr>
    <p>Importe Pagado :  {paidAmount}</p>
    <hr></hr>
    <p style={{color:"red"}}>{remainingAmount >= 0 ? 'Importe Pendiente :' : 'Importe a devolver :'} {remainingAmount}</p>
    <hr></hr>
    <BasicModal opened={opened} productList={productList} amount={amount} paidAmount={paidAmount} remainingAmount={remainingAmount}></BasicModal>
    </div>
  )
}

export default Total