import React from 'react'
import logo from '../logo.svg'

const GalleryItem = () => {
    return (
        <div>
            <div className="gallery-item" >
                <img src={logo} className="gallery-item--thumbnail" />
            </div>
        </div>
    )
}

export default GalleryItem