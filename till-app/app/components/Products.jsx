import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(code, description, price) {
  return { code, description, price };
}

const rows = [
  createData('123456','Frozen yoghurt', 159),
  createData('123456','Ice cream sandwich', 237),
  createData('123456','Eclair', 262),

];


const Products = () => {
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
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="left">{row.code}</TableCell>
            <TableCell align="center">{row.description}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Products