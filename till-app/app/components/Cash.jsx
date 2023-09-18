import React from 'react'

const Cash = (props) => {
//Accedemos a las propiedades que queremos mostrar en el modal
const {productList, paidAmount, remainingAmount, amount} = props
  return (
    <div id='total'>
<p>Total ({productList.length}) : {amount}€
</p>
  <hr style={{width:"50%"}}></hr>
<p>Importe Pagado :  {paidAmount}€</p>
<hr style={{width:"50%"}}></hr>
<p style={{color:"red"}}>{remainingAmount >= 0 ? 'Importe Pendiente :' : 'Importe a devolver :'} {remainingAmount}€</p>
<hr style={{width:"50%"}}></hr>
</div>
  )
}

export default Cash