import Link from 'next/link'
import './payOptions.css'



const PayOptions = (props) => {
  //Recibimos las funciones para setear el método de pago elegido
  const {setCash,setCard}=props

  //Accedemos al estado className y a su función set para manejar cuando mostrar/ocultar los botones de pago
  const { className, setClassName}=props

  //Accedemos a la función setClose para poder volver a mostrar el modal al pulsar tarjeta tras haber sido cancelado el pago por el usuario
  const { setClose }=props
  //Función que setea el método de pago elegido y oculta los botones
  const selectPaymentMode = (mode) =>{
    if (mode === 'cash') {setCash(true)
      setClose(false)
    }
    else {setCard(true)
      console.log('Tarjeta');
      setClose(false)
    }
   setClassName('payOptions-button-hidden')
  }
  return (<div id='pay-options'>
    <Link id='back-link' href={'/'}  > <button id='back-button' className='payOptions-button'>Volver</button> </Link>
    <button id='cash-button'  className={className} onClick={()=> selectPaymentMode('cash')}>Efectivo</button> 
    <button id='card-button'  className={className} onClick={()=> selectPaymentMode('card')} >Tarjeta</button> 
  </div>
  )
}

export default PayOptions