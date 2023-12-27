import React, { Component } from 'react'
import './css/Navbar.css'
import logoPng from './img/logoPng.png'
export default class Navbar extends Component {
     toggleStyle = ()=>{
        const navbar = document.querySelector('#navbar ul');
        const more = document.getElementById('more');
        const cross = document.getElementById('cross');
        if(more.style.display==='inline-block'){
            navbar.style.display = 'flex';
            cross.style.display = 'inline-block';
            more.style.display = 'none';
        }else{
            navbar.style.display = 'none';
            cross.style.display = 'none';
            more.style.display = 'inline-block';
        }
    }
    render() {
      return (
            <header id="navigation-div">
                <div id="logo">
                    <img id="stay-happy" src={logoPng} alt="www.foodess.com"/>
                    <img id="more" onClick={this.toggleStyle} src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-9.jpg" alt="" />
                    <img id="cross" onClick={this.toggleStyle} src="https://static-00.iconduck.com/assets.00/close-icon-256x256-bisauibe.png" alt="" />
                </div>
                <nav id="navbar">
                    <ul>
                        <li id="List-1"><a href="#home-div">Home</a></li>
                        <li id="List-2"><a href="#service-div">Services</a></li>
                        <li id="List-3"><a href="#clients-div">Our Clients</a></li>
                        <li id="List-4"><a href="#contact-us-div">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
      )
    }
}
