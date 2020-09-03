//static page with text and hero image
//includes header and footer

import React from 'react'

export default function Home() {
    return(

        <div className='hero'>
            <div className='hero-title-text'>
                <h1 className='hero-title'>Welcome to our Covid-19 tracking app!</h1>
                <h3 className='hero-text'>It is our hope that the data presented here on this website will empower you by providing accurate and up-to-date information about Covid-19 in the United States.</h3>
            </div>
            <img className='hero-image' src="https://www.lanl.gov/newsroom/_assets/images/science1.png" alt="covid-virus" />
        </div>

    )
}