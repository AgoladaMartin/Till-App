import React from 'react'

const Footer = () => {
    // crea un nuevo objeto `Date`
    const today = new Date();
 
    // obtener la fecha de hoy en formato `MM/DD/YYYY`
    const now = today.toLocaleDateString("es-ES")

  return (
    <div id='footer'>
      <p>{now}</p>
      <p>@ Martin Garcia 2023</p>
    </div>
  )
}

export default Footer