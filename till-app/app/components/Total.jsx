import useStore from '../store/store';
import BasicModal from './BasicModal';
import './total.css';



const Total = (props) => {
  //Accedemos a la lista de productos para poder sumar los totales
  const {productList} = useStore((state) => state);

  //Accedemos al total pagado
  const {paidAmount} = useStore((state) => state);

  //Accedemos a las variables de método de pago
  const {card, cash} = props

  //Creamos variables para almacenar el total, y lo que falta por pagar.
  let amount
  let remainingAmount

  //Creamos variable que controla la apertura del modal de pago
  let cashOpened

  

  //Función que suma el total de los productos. Si no hay productos que sumar, retorna 0
  const totalAmount = (productList) => {
   
    if (productList.length > 0) {
      amount = productList.reduce((acumulate, currentValue)=> acumulate + parseFloat(currentValue.price), 0).toFixed(2)
      remainingAmount = Number((amount-paidAmount)).toFixed(2)
      //Cuando el importe a pagar sea menor de cero, entonces se abre el modal de pago
      if (card){
        cashOpened = true;
      }
       else cashOpened = remainingAmount > 0 ? false : true
      return (amount,remainingAmount, cashOpened)
      }
      
    return (amount = (0).toFixed(2), cashOpened=false, remainingAmount = (0).toFixed(2))
  }

  
  //Ejecutamos la función de sumado
  totalAmount(productList)

  return (
    <div id='total'>
    <p>Total ({productList.length}) : {amount}€
    </p>
      <hr></hr>
    <p>Importe Pagado :  {paidAmount}€</p>
    <hr></hr>
    <p style={{color:"red"}}>{(remainingAmount >= 0 || amount === 0) ? 'Importe Pendiente :' : 'Importe a devolver :'} {remainingAmount}€</p>
    <hr></hr>
    <BasicModal opened={cashOpened} productList={productList} amount={amount} paidAmount={paidAmount} remainingAmount={remainingAmount} card={card} cash={cash}></BasicModal>
    
    </div>
  )
}

export default Total