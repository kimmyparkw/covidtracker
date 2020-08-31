//includes the logo and the nav
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div className="header">
            <h1>Logo will go here</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/stats'>Stats</Link>
                {props.auth && <Link to='/profile'>Profile</Link>}
                {props.auth ? (<Link to='/auth/logout' onClick={props.logout}>Logout</Link>) : (<Link to='/auth/login'>Login</Link>)}
            </nav>
        </div>
    )
}