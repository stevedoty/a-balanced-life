import React from 'react'
import GalleryItem from './gallery-item.js'
import ProductView from './product-view.js'

class Gallery extends React.Component {

    render(){
        return (
            <div className="gallery">
                <div className="gallery-list">
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                    <GalleryItem />
                </div>
                <ProductView />
            </div>
        )
    }
}

export default Gallery