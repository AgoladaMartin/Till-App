'use client'

const Footer = () => {
    // Crea un nuevo objeto `Date`
    const today = new Date();
 
    // Obtener la fecha de hoy en formato `MM/DD/YYYY`
    const now = today.toLocaleDateString("es-ES")

    
 /*    // Función que muestra la hora   
      const [time, setTime] = useState(new Date())
      useEffect(() =>{
        setInterval(()=> setTime(new Date()), 1000)
      },[])
 */

  return (
    <div id='footer'>
      <p>{now}</p>
      {/* <p>{time.toLocaleTimeString()}</p> */}
      <p>@ Martin Garcia 2023</p>
    </div>
  )
}

export default Footer