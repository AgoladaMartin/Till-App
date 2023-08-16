import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Products = (props) => {

  const {productList} = props

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell align="left">Código</TableCell>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
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
  )
}

export default Products