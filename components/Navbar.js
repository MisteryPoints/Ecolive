import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light static-top">
        <div className="container"> 
          <Link  href="/">
            <a className="navbar-brand"> EcoLive </a>
          </Link>   
          <Link href="#signup">
            <a className="btn btn-primary" >Iniciar Sesión</a>
          </Link> 
        </div>
    </nav>
  )
}

export default Navbar