
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import useStore from '../store/store';
import Card from './Card';
import Cash from './Cash';






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  //Accedemos a la variable open para saber cuando mostrarlo
  const { opened } = props

  //Creamos variable de cerrado
  const [close, setClose] = useState(false)

  // Determinamos si el modal debe estar abierto
  const isOpen = () => {
    return !close && opened; // Si close es false, prevalece opened
  };

  //Accedemos a los estados que vamos a necesitar
  const [setProductList] = useStore((state) => [state.setProductList]);
  const [setPaidAmount] = useStore((state) => [state.setPaidAmount]);


  //Pago en EFECTIVO: Creamos función que cierra el modal e inicia una nueva transacción
  const finishCash = () => {
    setProductList([])
    setPaidAmount((0).toFixed(2))
    setClose(true)
    // Redirigimos a la página principal
    window.location.href = '/';  // Esto hace la redirección en lado cliente
  }

  //Pago con TARJETA: Creamos función que cierra el modal e inicia una nueva transacción
  const [showButton, setShowButton] = useState(true); // Estado para controlar si mostrar el botón o no una vez hecho click en aceptar
  const [mensaje, setMensaje] = useState(` ¿Pagar con tarjeta? `)
  const finishCard = () => {
    setShowButton(false); // Oculta el botón al hacer click
    setMensaje('Procesando');
    //Con dos setTimeout simulamos la conexión del tpv con el banco
    setTimeout(() => {
      setMensaje('Conectando con el servidor');

      // Genera un número aleatorio entre 0 y 1
    const errorChance = Math.random();
    
    // Si el número es menor que 0.15, simula un error (15% de probabilidad)
    if (errorChance < 0.15) {
      setTimeout(() => {
        setMensaje('Error al conectar');
        // Después de 2 segundos, vuelve a mostrar el mensaje inicial
        setTimeout(() => {
          setMensaje('¿Pagar con tarjeta?');
          setShowButton(true); // Vuelve a mostrar el botón si es necesario
        }, 2000); 
      }, 1000); // Muestra "Error al conectar" después de 1 segundo
    } else {
      // Si no hay error, continúa con la conexión exitosa
      setTimeout(() => {
        setProductList([]); 
        setPaidAmount((0).toFixed(2)); 
        setClose(true); 
        window.location.href = '/'; // Redirige a la página principal
      }, 2000); 
    }
    }, 2000); 
  };

  // Función para cerrar el modal sin alterar el estado
  const handleClose = () => {
    setClose(true)
  };

  //Accedemos a las propiedades que queremos mostrar en el modal
  const { productList, paidAmount, remainingAmount, amount, card, cash } = props

  return (
    <div>
      <Modal
        open={isOpen()}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {cash ? (
            <Cash
              productList={productList}
              amount={amount}
              paidAmount={paidAmount}
              remainingAmount={remainingAmount}
            />
          ) : (
            <Card
              productList={productList}
              amount={amount}
              paidAmount={paidAmount}
              remainingAmount={remainingAmount}
              mensaje={mensaje}
            />
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
            {cash && (
              <Button
                onClick={finishCash}
                sx={{
                  backgroundColor: 'rgba(9, 19, 16, 0.801)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(9, 19, 16, 0.404)',
                  },
                  marginRight: '10px',
                }}
              >
                Aceptar
              </Button>
            )}
            {card && showButton && (
              <Button
                onClick={finishCard}
                sx={{
                  backgroundColor: 'rgba(9, 19, 16, 0.801)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(9, 19, 16, 0.404)',
                  },
                  marginRight: '10px',
                }}
              >
                Aceptar
              </Button>
            )}
            {card && showButton && (
              <Button
                onClick={handleClose}
                sx={{
                  backgroundColor: 'rgba(9, 19, 16, 0.801)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(9, 19, 16, 0.404)',
                  },
                }}
              >
                Cancelar
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}