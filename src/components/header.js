import React from 'react'
import Navbar from './navbar.js'
import logo from '../logo.svg'

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="landing-page">
                <div className="landing-page--picture">
                    <img src={logo}/>
                </div>
                <div className="mission-statement">
                    <ul>
                        <li>ayervedic</li>
                        <li>all-natural</li>
                        <li>organic</li>
                        <li>environmentally friendly</li>
                        <li>sustainable</li>
                        <li>simple</li>
                        <li>clean</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header