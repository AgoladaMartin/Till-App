'use client'
import {React} from 'react'


const Keyboard = (props) => {
  
  const {code, setCode} = props
  
  const addNumber = (number) => {    
    const newCode = code + number    
    setCode(newCode)    
    return code
    }

  const typing = (e) => {
    setCode(e.target.value)
  }  

  const deleteNumber = () =>{
   
    const newCode = code.slice(0, code.length-1 )
    setCode(newCode)
  }
  const submit = () => {
    
  }
    return (
      <div>
        <form>
            <input type="text" value={code} onChange={typing}/>
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
          <button>Enter</button>
          </div>
        </div>

    </div>
      
  )
}

export default Keyboard

