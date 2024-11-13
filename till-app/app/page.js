'use client'
import { ThemeProvider } from '@mui/material/styles'
import 'app/globals.css'
import theme from '../app/components/mui/theme'
import Keyboard from './components/Keyboard'
import PayButton from './components/PayButton'
import Products from './components/Products'
import Total from './components/Total'


export default function Home() {

 
  
  return (
    <ThemeProvider theme={theme}>
    <div id='main'>
      <Products  ></Products>
      <Keyboard ></Keyboard>
      <Total ></Total>
      <PayButton  ></PayButton>
    </div>
    </ThemeProvider>
  )
}
