// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Cambia 'Roboto' por la fuente que desees
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, Arial, sans-serif', // Asegúrate de que los botones también usen la nueva fuente
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, Arial, sans-serif', // Asegúrate de que las celdas de la tabla usen la nueva fuente
        },
      },
    },
    // Agrega más componentes según sea necesario
  },
});

export default theme;
