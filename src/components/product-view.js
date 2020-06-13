import React, {Component} from 'react'
import logo from '../logo.svg'

class ProductView extends Component{
constructor(props){
    super(props);
    this.state={
        cart: [],
        productCount: 0
    }
}
    render(){
    let handleMoveToCart = () => {
        let newCart = this.state.cart
        newCart.push(this.state.productCount)
        this.setState({cart:newCart})
        console.log(this.state.cart)
    }
    let handleSubtractFromCount = () => {
        if (this.state.productCount != 0 ){
            let newCount = this.state.productCount
            newCount --
            this.setState({productCount:newCount})
        }
    }
    let handleAddToCount = () => {
        let newCount = this.state.productCount
        newCount ++
        this.setState({productCount:newCount})
    }

        return (
            <div className="product-view" style={{color: "red"}}>
                <img src={logo} className="product-view--picture"/>
                <div className="mission-statement">
                    <ul>
                        <li>name:</li>
                        <li>price:</li>
                        <li>ingredients:</li>
                        <li>allergens:</li>
                        <li>manufacturer:</li>
                        <li>in stock:</li>
                    </ul>
                    <button onClick={handleMoveToCart}>add</button>
                    <div className="product-counter">
                        <button onClick={handleSubtractFromCount}>-1</button>
                        <div className="product-count" >{this.state.productCount}</div>
                        <button onClick={handleAddToCount}>+1</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductView