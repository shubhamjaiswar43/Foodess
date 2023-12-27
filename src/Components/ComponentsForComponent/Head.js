import React, { Component } from 'react'
import './css/Head.css';
import {Link} from 'react-router-dom';
export default class Head extends Component {
  render() {
    return (
      <>
        <h1 id="head">
        Welcome To Our Food Store
        </h1>
        <div id="search-option">
            <Link to="/Foodess-React" className="btn2">Go Back</Link>
            <input type="text" id="search" placeholder="Search Here"/>
            <select name="Food Sections" id="food-section">
                <option value="all">All</option>
                <option value="chinese">Chinese Food</option>
                <option value="veg">Vegetarian Food</option>
                <option value="nonVeg">Non-Vegetarian Food</option>
            </select>
        </div>
      </>
    )
  }
}
