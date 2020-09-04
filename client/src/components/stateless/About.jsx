import React from 'react'


export default function About() {
    return(
        <div className='hero'>
            <div className="hero-title-text">
                <h1>About this app</h1>
                <h3 className='hero-text'>Due to the lack of clear and accessible information, it can be difficult for the public to remain properly informed of current COVID-19 statistics in various U.S. states or territories. Our hope is that, by creating this info-tracking website, you will be able to focus on data relevant to your specific locations of interest. This will allow you to safely make informed decisions based on dynamic data that is presented in a visually comprehensible way.</h3>  
            </div>
            
            <img className='hero-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png" alt="covid-virus" />
            
        </div>
    )
}