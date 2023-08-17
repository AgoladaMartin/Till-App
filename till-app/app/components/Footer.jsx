import React from 'react'

const Footer = () => {
    // crea un nuevo objeto `Date`
    const today = new Date();
 
    // obtener la fecha de hoy en formato `MM/DD/YYYY`
    const now = today.toLocaleDateString("es-ES")

  return (
    <div>{now}</div>
  )
}

export default Footer