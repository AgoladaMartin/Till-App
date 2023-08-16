import React from 'react'

const Total = (props) => {
  const {productList} = props
  return (
    <div id='total'>
    <p>Total ({productList.length}) : 
    </p>
      <hr></hr>
    <p>Importe Pagado</p>
    <hr></hr>
    <p style={{color:"red"}}>Importe Pendiente</p>
    <hr></hr>
    </div>
    
  )
}

export default Total