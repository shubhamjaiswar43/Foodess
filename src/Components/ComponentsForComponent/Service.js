import React, { Component } from 'react'
import './css/Service.css';
import service1 from './img/service1.png';
import service2 from './img/Service2.webp';
import service3 from './img/service3.png';
export default class Service extends Component {
  render() {
    return (
        <div id="service-div">
        <h1 className="h-primary">Our Services</h1>
        <div id="service">
            <div className="box" id="box-1">
                <img src={service1} alt="First Service"/>
                <h2 className="h-secondary">Food Ordering</h2>
                    <p className="para">Join the Foodess community today and unlock a world of culinary delights at your fingertips. Experience the joy of effortless food ordering.</p>
            </div>
            <div className="box" id="box-2">
                <img src={service2} alt="Second Service"/>
                <h2 className="h-secondary">Catering</h2>
                    <p className="para">Foodess provides delicious custom menus and beautiful food presentation for memorable events.</p>
            </div>
            <div className="box" id="box-3">
                <img src={service3} alt="Third Service"/>
                <h2 className="h-secondary">Bulk Ordering</h2>
                    <p className="para">With Foodess, Enjoy seamless and delicious bulk ordering for your large gatherings and events, offering a diverse and customizable menu with impeccable presentation and top-notch service.</p>
            </div>
        </div>
    </div>
    )
  }
}
