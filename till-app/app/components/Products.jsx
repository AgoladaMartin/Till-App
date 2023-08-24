import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStore from '../store/store';



const Products = () => {

  //Accedemos a la lista de productos, en caso de estar vacia no se muestra nada
  const {productList} = useStore((state) => state);
  


  return (
    <div id='productList'>
    <TableContainer component={Paper} >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead id='table-head' >
          <TableRow>
            <TableCell className='table-head' align="left">Código</TableCell>
            <TableCell   className='table-head' align="center">Descripción</TableCell>
            <TableCell  className='table-head' align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
      <TableBody  id='table-body'>
       {productList ?  productList.map((product) => (
      <TableRow
        key={Math.random()}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="left">{product.code}</TableCell>
        <TableCell align="center">{product.description}</TableCell>
        <TableCell align="right">{product.price}</TableCell>
      </TableRow>
    )) : ''}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default Products