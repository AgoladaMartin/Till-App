import React from 'react'

const PayButton = (props) => {
  //Recibimos la lista de productos por props
  const {productList} = props
  

  
  const subtotal = () =>{
      alert('Redirigir al pago')
  }

  //Si hay productos en la lista mostramos el botón subtotal, si está vacia no se muestra nada
  const render = (productList.length > 0) ? 
  <button onClick={subtotal} id='pay-button'>Subtotal</button> :
  ''
  return (
    <>
    {render}
    </>
  )
}

export default PayButton