'use client'
import {React} from 'react'


const Keyboard = (props) => {
  
  //Recibimos los estados que vamos a necesitar mediante props
  const {code, setCode, productList} = props
  
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
  const submit = async () => {
      const data = {
        code : code,
        product: Math.floor((Math.random() * 7)) //Generamos un número para que nos de un producto aleatorio en cada llamada
      };

      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(data),
      });
      
      const body = await response.json()
      setCode('') //Borramos el código de producto
      productList.push(body)
    };
  
  
    return (
      <div id='input-keyboard'>
        <form>
          <label for="code-input">Introduce un código</label>
          <input type="text" id='code-input' value={code} onChange={typing}/>
        </form>
        <div id='keyboard'>
          <div>
            <button onClick={() => addNumber('1')}>1</button>
            <button onClick={() => addNumber('2')}>2</button>
            <button onClick={() => addNumber('3')}>3</button>
          </div>
          <div>
            <button onClick={() => addNumber('4')}>4</button>
            <button onClick={() => addNumber('5')}>5</button>
            <button onClick={() => addNumber('6')}>6</button>
          </div>
          <div>
            <button onClick={() => addNumber('7')}>7</button>
            <button onClick={() => addNumber('8')}>8</button>
            <button onClick={() => addNumber('9')}>9</button>
          </div>
          <div>
            <button onClick={() => addNumber('0')}>0</button>
            <button onClick={() => addNumber(',')}>,</button>
            <button onClick={deleteNumber}>&#8592;</button>
          </div>
          <div>
          <button onClick={() => addNumber('00')}>00</button>
          <button onClick={submit}>Enter</button>
          </div>
        </div>

    </div>
      
  )
}

export default Keyboard

