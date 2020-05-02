import React, { Component } from "react"

import "./sidebar.styles.scss"

// react icons
import { FaShoppingBag} from "react-icons/fa"

export default class Sidebar extends Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px"
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0"
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="#home" className="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <a href="#home">About</a>
          <a href="#home">Services</a>
          <a href="#home">Clients</a>
          <a href="#home">Contact</a>
        </div>

        <span className="sp" onClick={this.openNav}>
          <FaShoppingBag />
        </span>
      </div>
    )
  }
}
