//includes the logo and the nav
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../covidlogo.png'

export default function Header(props) {
    return (
        <div className="nav-container">
            <img src={Logo} alt='logo'/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/stats'>Stats</Link>
                {props.auth && <Link to='/user/profile'>Profile</Link>}
                {props.auth ? (<Link to='/auth/logout' onClick={props.logout}>Logout</Link>) : (<Link to='/auth/login'>Login</Link>)}
            </nav>
        </div>
    )
}