//static page with text and hero image
//includes header and footer

import React from 'react'

export default function Home() {
    return(
        <div className='hero'>
            <img className='hero-image' src="https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/9/18/918c6f23-36fa-5acb-9aef-6001fa5e3de5/5f15ab9a06304.image.jpg?resize=1200%2C677" alt="covid-virus" />
            <h3 className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>
        </div>
    )
}