import React from 'react'
import {Nav, Card, ListGroup} from 'react-bootstrap'
import logo from '../logo.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <Nav>
                    <Nav.Item>
                        HOME
                    </Nav.Item>
                    <Nav.Item>
                        SEARCH
                    </Nav.Item>
                    <Nav.Item>
                        DENTAL
                    </Nav.Item>
                    <Nav.Item>
                        BATH
                    </Nav.Item>
                    <Nav.Item>
                        BATH
                    </Nav.Item>
                    <Nav.Item>
                        BATH
                    </Nav.Item>
                </Nav>
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