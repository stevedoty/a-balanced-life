import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import logo from '../logo.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
            </div>
            <div className="landing-page">
                <img className="landing-page--image" src={logo}/>
                <ul className="landing-page--list">
                    <li>organic</li>
                    <li>ayervedic</li>
                    <li>all natural</li>
                    <li>organic</li>
                    <li>ayervedic</li>
                    <li>all natural</li>
                    <li>organic</li>
                    <li>ayervedic</li>
                    <li>all natural</li>
                </ul>
            </div>
        </div>
    )
}

export default Header