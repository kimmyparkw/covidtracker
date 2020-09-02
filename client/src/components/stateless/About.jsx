//static page with hero image and text
//includes the header and footers

import React from 'react'


export default function About() {
    return(
        <div className='hero'>
            <div className="hero-title-text">
                <h1>About this app</h1>
                <h3 className='hero-text'>Due to the lack of clear and accessible information, it can be difficult for the public to remain properly informed of current COVID-19 statistics in various U.S. states or territories. Our hope is that, by creating this info-tracking website, you will be able to focus on data relevant to your specific locations of interest. This will allow you to safely make informed decisions based on dynamic data that is presented in a visually comprehensible way.</h3>  
            </div>
            
            <img className='hero-image' src="https://www.lanl.gov/newsroom/_assets/images/science1.png" alt="covid-virus" />
            
        </div>
    )
}