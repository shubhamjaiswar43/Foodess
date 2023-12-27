import React, { Component } from 'react';
import './css/Main.css';
import './css/Phone.css';
import Navbar from './ComponentsForComponent/Navbar';
import Home from './ComponentsForComponent/Home';
import Service from './ComponentsForComponent/Service';
import Clients from './ComponentsForComponent/Clients';
import Contact from './ComponentsForComponent/Contact';
import Footer from './ComponentsForComponent/Footer';
export default class Main extends Component {
  componentDidMount(){
    const body = document.querySelector('body');
    body.style.backgroundImage = 'none';
  }
  render() {
    return (
      <>
        <Navbar/>
        <Home/>
        <Service/>
        <Clients/>
        <Contact/>
        <Footer/>
      </>
    )
  }
}
