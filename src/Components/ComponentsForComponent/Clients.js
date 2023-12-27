import React, { Component } from 'react'
import './css/Clients.css';
import Client1 from './img/client1.png';
import Client2 from './img/client2.png';
import Client3 from './img/client3.png';
import Client4 from './img/client4.png';
export default class Clients extends Component {
  render() {
    return (
        <div id="clients-div">
            <h1 className="h-primary">Our Clients</h1>
            <div id="clients">
                <div className="logo trans" id="logo-1"><img src={Client1} alt="Loading"/></div>
                <div className="logo trans" id="logo-2"><img src={Client2} alt="Loading"/></div>
                <div className="logo trans" id="logo-3"><img src={Client3} alt="Loading"/></div>
                <div className="logo trans" id="logo-4"><img src={Client4} alt="Loading"/></div>
            </div>
        </div>
    )
  }
}
