import React, { Component } from 'react';
import './css/FoodItem.css';
export default class FoodItem extends Component {
  addedToCart = ()=>{
    alert("Added To Cart Successfully!!!");
  }
  render() {
    return (
      <>
        <div className="foodItem">
            <div className="foodImg">
                <img src={this.props.image} alt="Loading"/>
            </div>
            <div className="details">
                <p>{this.props.foodName}</p>
                <p>{this.props.deliveryTime}</p>
                <p>{this.props.foodDetails}</p>
                <p>{this.props.costOfFood}</p>
                <button onClick={this.addedToCart} className='btn2'>Add To Cart</button>
            </div>
        </div>
      </>
    )
  }
}
