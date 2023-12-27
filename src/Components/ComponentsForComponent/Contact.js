import React, { Component } from 'react'
import './css/Contact.css';
export default class Contact extends Component {
  render() {
    return (
        <div id="contact-us-div">
            <div id="contact-us">
                <h1 className="h-primary">Contact Us</h1>
                <form action="#">
                    <div className="form-grp">
                        <label htmlFor="Name">Name : </label>
                        <br/>
                        <input type="text" id="name" placeholder="Enter Your Name"/>
                    </div>
                    <div className="form-grp">
                        <label htmlFor="email">Email : </label>
                        <br/>
                        <input type="text" id="email" placeholder="Enter Your Email"/>
                    </div>
                    <div className="form-grp">
                        <label htmlFor="phone">Phone No. : </label>
                        <br/>
                        <input type="number" id="phone" placeholder="Enter Your phone No."/>
                    </div>
                    <div className="form-grp">
                        <label htmlFor="messege">Messege : </label>
                        <br/>
                        <textarea name="messege" id="messege" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-grp">
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}
