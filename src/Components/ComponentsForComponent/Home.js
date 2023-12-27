import React, { Component } from 'react'
import './css/Home.css';
import {Link} from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
        <div id="home-div">
            <div id="home">
                <div>
                    <h1 className="h-primary">Welcome to Foodess - Your One-Stop Food Store!</h1>
                    
                    <h2 style={{marginTop:'10px'}}>We believe that good food brings people together and creates unforgettable moments.</h2>
                    <h2>Step into our store, and you'll be welcomed by the enticing aroma of delicious foods </h2>
                </div>
                <Link className="btn" onClick={this.addColorToBody} to="/order">Order Now</Link>
            </div>
        </div>
    )
  }
}
