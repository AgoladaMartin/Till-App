

const Card = (props) => {
//Accedemos a las propiedades que queremos mostrar en el modal
const {productList, mensaje, remainingAmount} = props



  return (
          <div id='total'>
          <p>{productList ? `Total (${productList.length}) : ${remainingAmount}€` : ''}
          </p>
            <hr style={{width:"50%"}}></hr>
          <p> {mensaje}</p>
          </div>
  );



}
export default Card
