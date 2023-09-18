
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { React, useState } from 'react';
import Link from 'next/link'
import useStore from '../store/store';
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
  const {opened} = props

//Creamos variable de cerrado
  const [close, setClose]=useState()

//En caso de que haya variable de apertura y no de cierre se muestra el modal
  let open = opened && !close ? true : false

//Accedemos a los estados que vamos a necesitar
  const [setProductList] = useStore((state) => [state.setProductList]);
  const [setPaidAmount] = useStore((state) => [state.setPaidAmount]);

//TO DO: Crear los diferentes contenidos para el modal
//Creamos función que cierra el modal e inicia una nueva transacción
const finish = () => {
  setProductList([])
  setPaidAmount((0).toFixed(2))
  setClose(true)

}

//Accedemos a las propiedades que queremos mostrar en el modal
const {productList, paidAmount, remainingAmount, amount} = props

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      <Cash  productList={productList} amount={amount} paidAmount={paidAmount} remainingAmount={remainingAmount}></Cash>
      <div style={{display:'flex', justifyContent:'flex-end'}} ><Link id='back-link' href={'/'} ><Button onClick={finish}>Aceptar</Button></Link></div>
        </Box>
      </Modal>
    </div>
  );
}