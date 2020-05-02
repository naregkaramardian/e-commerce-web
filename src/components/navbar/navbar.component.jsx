import React, { Component } from "react"
import "./navbar.styles.scss"
import { GiHamburgerMenu } from "react-icons/gi";

// components
import NavbarIcon from "./navbarIcon/navbarIcon.component"

export default class Navbar extends Component {
  toogleNavbar = () => {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
      x.className += " responsive"
    } else {
      x.className = "topnav"
    }
  }
  

  render() {
    return (
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#about" class="icon"onClick={this.toogleNavbar}>
        <GiHamburgerMenu />
        </a>
      </div>
    )
  }
}
