import React from 'react'
import { Link } from 'react-router-dom'
import logoBanque from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/app.css'

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-item" to="/">
        <img
          className="main-nav-logo-image"
          src={logoBanque}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/Signin">
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header
