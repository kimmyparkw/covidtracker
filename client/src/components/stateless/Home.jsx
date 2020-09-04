import React from 'react'

export default function Home() {
    return(

        <div className='hero'>
            <div className='hero-title-text'>
                <h1 className='hero-title'>Welcome to our Covid-19 tracking app!</h1>
                <h3 className='hero-text'>It is our goal to empower you to stay safe and knowledgable by providing accurate and up-to-date information about the current state of COVID-19 in the United States.</h3>
            </div>
            <img className='hero-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png" alt="covid-virus" />
        </div>

    )
}