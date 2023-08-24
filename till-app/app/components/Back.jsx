import React from 'react'
import Link from 'next/link'


const Back = () => {
  return (
    <Link id='back-link' href={'/'}  > <button id='back-button'>Volver</button> </Link>
  )
}

export default Back