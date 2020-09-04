import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../covidlogo.png'

export default function Header(props) {
    return (
        <nav className="nav-container">
            <img src={Logo} alt='logo'/>
            <div className="burger-toggle">
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className='navlinks'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/stats'>Stats</Link>
                </li>
                    {props.auth && <li><Link to='/user/profile'>Profile</Link></li>}
                     {props.auth ? (<li><Link className='log' to='/auth/logout' onClick={props.logout}>Logout</Link></li>) : (<li><Link className='log' to='/auth/login'>Login</Link></li>)}
            </ul>

        </nav>
    )
}