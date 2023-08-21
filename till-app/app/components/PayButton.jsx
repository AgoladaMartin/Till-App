import Link from 'next/link'
import React from 'react'
import useStore from '../store/store';

const PayButton = () => {
  //Accedemos a la lista de productos para saber cuando mostrar el botón
  const {productList} = useStore((state) => state);


  
  const subtotal = () =>{
      alert('Redirigir al pago')
  }

  //Si hay productos en la lista mostramos el botón subtotal, si está vacia no se muestra nada
  const render = (productList.length > 0) ? 
  <button onClick={subtotal} id='pay-button'><Link id='payment-link' href={'/payment'}  >Subtotal</Link></button> :
  ''
  return (
    <>
    {render}
    </>
  )
}

export default PayButton