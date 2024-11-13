'use client'
import { useEffect } from 'react';
import useStore from '../store/store';
import './keyboard.css';



const Keyboard = (props) => {
  //Accedemos a las opciones a través de props
  //Si payment es true se muestra el teclado de pago 
  const {payment, cash} = props
  //Mientras no se escoja la opción cash (cash = false), el teclado está deshabilitado
  const disabled = payment && !cash ? true : false
  //Establecemos el label en función de la vista
  const label = payment ? 'Importe' : 'Intr. código 5 dígitos'
  //Accedemos a los estados que vamos a necesitar
  const [code, setCode] = useStore((state)=>[state.code, state.setCode])
  const {productList} = useStore((state) => state);
  const [paidAmount, setPaidAmount] = useStore((state) => [state.paidAmount,state.setPaidAmount]);

  
  //Función que añade un dígito al código de producto cada vez que hacemos click en un botón
  const addNumber = (number) => {    
    const newCode = code + number
    setCode(newCode)
    return code
    }

  //Función que añade un dígito al código de producto si se usa el teclado externo
  const typing = (e) => {
    setCode(e.target.value)
  }  

  //Función para borrar el último dígito añadido al pulsar el botón de borrado
  const deleteNumber = () =>{   
    const newCode = code.slice(0, code.length-1 )
    setCode(newCode)
  }

  //Función que recoge el código y lo envía a la Api
  const submitCode = async () => {
    const data = {
        code : code,
        product: Math.floor((Math.random() * 7)) //Generamos un número para que nos de un producto aleatorio en cada llamada
      };
    //Validamos que el código tenga 5 dígitos númericos:
    const validCode = /^[0-9]+$/;
      if (data.code.length === 5 && data.code.match(validCode)){
        try {
        
          const response = await fetch("/api/products", {
          method: "POST",
          body: JSON.stringify(data),
      });
      
    const body = await response.json()
    setCode('') //Borramos el código de producto
    productList.push(body)
        } catch (error) {
        console.error(error)
        setCode('')}
      }
      else {
      alert('Código no válido, introduce 5 dígitos')
      setCode('')}};
  
  //Función manejadora del evento submit
  const submit = () =>{
    if (payment) {
      const newCode = (parseInt(code)+parseInt(paidAmount)).toFixed(2)
      setPaidAmount(newCode)
      setCode('')
    }
    else submitCode()
  }
   // Efecto para manejar el evento de teclado
   useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevenir la acción por defecto del Enter
        submit(); 
      }
    };

    // Añadir el evento de escucha
    window.addEventListener('keydown', handleKeyDown);

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [code, paidAmount]); // Dependencias
  
    return (
      <div id='input-keyboard'>
        <form>
          <label htmlFor="code-input">{label}</label>
          <input style={{width:"180px"}} type="text" id='code-input' value={cash ? parseFloat(code || 0).toFixed(2) : code}  onChange={typing}/>
        </form>
        <div id='keyboard'>
          <div>
            <button className='button' disabled={disabled} onClick={() => addNumber('1')}>1</button>
            <button className='button' disabled={disabled} onClick={() => addNumber('2')}>2</button>
            <button className='button' disabled={disabled} onClick={() => addNumber('3')}>3</button>
          </div>
          <div>
            <button className='button' disabled={disabled} onClick={() => addNumber('4')}>4</button>
            <button className='button' disabled={disabled} onClick={() => addNumber('5')}>5</button>
            <button className='button' disabled={disabled} onClick={() => addNumber('6')}>6</button>
          </div>
          <div>
            <button className='button' disabled={disabled} onClick={() => addNumber('7')}>7</button>
            <button className='button' disabled={disabled} onClick={() => addNumber('8')}>8</button>
            <button className='button' disabled={disabled} onClick={() => addNumber('9')}>9</button>
          </div>
          <div>
            <button className='button' disabled={disabled} onClick={() => addNumber('0')}>0</button>
            <button className='button' disabled={disabled} onClick={() => addNumber('00')}>00</button>            
            <button className='button' disabled={disabled} onClick={deleteNumber}>&#8592;</button>
          </div>
          <div>
          
          <button className='button' disabled={disabled} id={disabled ? 'enter-button-disabled' : 'enter-button'} onClick={submit}>Enter</button>
          </div>
        </div>

    </div>
      
  )
}

export default Keyboard

