import React from 'react'

import phone from '../icons/phone.svg'
import letter from '../icons/letter.svg'
import facebook from '../icons/facebook.svg'
import twitter from '../icons/twitter.svg'
import instagram from '../icons/instagram.svg'
import youtube from '../icons/youtube.svg'
import linkedin from '../icons/linkedin.svg'

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer--icon icon" src={phone}/>
            <img className="footer--icon icon" src={letter}/>
            <img className="footer--icon icon" src={facebook}/>
            <img className="footer--icon icon" src={twitter}/>
            <img className="footer--icon icon" src={instagram}/>
            <img className="footer--icon icon" src={youtube}/>
            <img className="footer--icon icon" src={linkedin}/>
        </div>
    )
}

export default Footer