import React, { Component } from 'react'
import './navbaricon.styles.scss'

export default class NavbarIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isBoxVisible:"change"
        }
      }


      toggleBox = () => {
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
      };
      

     animation = (x)=> {
        x.classList.toggle("change");
      }

    render() {
        return (
            <div class="container"  onClick={this.toggleBox}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        )
    }
}
