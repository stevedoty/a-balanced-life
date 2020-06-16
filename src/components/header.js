import React from 'react'
import {Nav, Card, ListGroup} from 'react-bootstrap'
import logo from '../logo.svg'
import home from '../icons/home.svg'
import search from '../icons/search.svg'
import mouth from '../icons/mouth.svg'
import bathtub from '../icons/bathtub.svg'
import misc from '../icons/misc.svg'
import cart from '../icons/cart.svg'
import phone from '../icons/phone.svg'
import letter from '../icons/letter.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <Nav>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={home}/>
                    </Nav.Item>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={search}/>
                    </Nav.Item>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={mouth}/>
                    </Nav.Item>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={bathtub}/>
                    </Nav.Item>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={misc}/>
                    </Nav.Item>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={cart}/>
                    </Nav.Item>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={phone}/>
                    </Nav.Item>
                    <Nav.Item>
                        <img className="navbar--icon icon" src={letter}/>
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