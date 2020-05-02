import React, { Component } from "react"
import './footer.styles.scss'

// fonts
import { FaFacebookF , FaInstagram , FaTwitter , FaYoutube } from "react-icons/fa";


export default class Footer extends Component {
  render() {
    return (
      <div className="ft-flex-Container">
        <div className="ft-flex-child">
          <h4>CONTACT</h4>
          <ul className="list">
            <li>support@ecommerce.com</li>
            <li> &copy; Copyright 2020. All Rights Reserved</li>
            <li></li>
          </ul>
        </div>

        <div className="ft-flex-child">
          <h4>ABOUT</h4>
          <ul className="list">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Privecy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="ft-flex-child">
          <h4>LET US HELP YOU</h4>
          <ul className="list">
            <li>FAQs</li>
            <li>Payment Methods</li>
            <li>Shipping & Delivery</li>
            <li>Returns Policy</li>
            <li>Trackingy</li>
          </ul>
        </div>

        <div className="ft-flex-child">
          <h4>JOIN US ON</h4>
          <ul className="list">
            <li> <FaFacebookF/>  Facebook </li>
            <li> <FaInstagram /> Instagram </li>
            <li> <FaTwitter />   Twitter </li>
            <li> <FaYoutube />   YouTube </li>
          </ul>
        </div>
      </div>
    )
  }
}
