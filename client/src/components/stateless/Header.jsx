//includes the logo and the nav
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../covidlogo.png'

export default function Header(props) {
    return (
        <div className="nav-container">
            <img src={Logo} alt='logo'/>

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
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
        </div>
    )
}