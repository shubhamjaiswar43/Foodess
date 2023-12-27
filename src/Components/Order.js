import React, { Component } from 'react';
import './css/Order.css';
import Head from './ComponentsForComponent/Head'
import Food from './ComponentsForComponent/Food'
export default class Order extends Component {
  componentDidMount(){
    const body = document.querySelector('body');
    body.style.backgroundImage = 'linear-gradient(to left bottom,rgb(93, 93, 216),rgb(230, 73, 73))';
  }
  render() {
    return (
      <>
      <Head/>
      <Food/>
      </>
    )
  }
}
