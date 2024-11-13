import Link from 'next/link';
import useStore from '../store/store';

const PayButton = () => {
  //Accedemos a la lista de productos para saber cuando mostrar el botón
  const {productList} = useStore((state) => state);


  
 

  //Si hay productos en la lista mostramos el botón subtotal, si está vacia no se muestra nada
  const render = (productList.length > 0) ? 
  <Link id='payment-link' href={'/payment'}  ><button id='pay-button'>Subtotal</button></Link> :
  ''
  return (
    <>
    {render}
    </>
  )
}

export default PayButton