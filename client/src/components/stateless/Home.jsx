//static page with text and hero image
//includes header and footer

import React from 'react'

export default function Home() {
    return(

        <div className='hero'>
            <div className='hero-title-text'>
                <h1 className='hero-title'>Welcome to our Covid-19 tracking app!</h1>
                <h3 className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>
            </div>
            <img className='hero-image' src="https://www.lanl.gov/newsroom/_assets/images/science1.png" alt="covid-virus" />
        </div>

    )
}