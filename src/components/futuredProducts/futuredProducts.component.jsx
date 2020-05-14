import React, { Component } from "react"
import "./futuredProducts.styles.scss"

// import images
import handbag from '../../assets/images/handbag1.jpg'

export default class FuturedProducts extends Component {
  constructor(props) {
    super(props)
    this.evt1 = React.createRef()
    this.evt2 = React.createRef()
    this.evt3 = React.createRef()
  }

  openCity = (evt) => {
    var i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    if (evt === "evt1") {
      this.evt1.current.style.display = "block"
      var bt1 = document.getElementById("bt1")
      bt1.className += " active"
    }
    if (evt === "evt2") {
      this.evt2.current.style.display = "block"
      var bt2 = document.getElementById("bt2")
      bt2.className += " active"
    }
    if (evt === "evt3") {
      this.evt3.current.style.display = "block"
      var bt3 = document.getElementById("bt3")
      bt3.className += " active"
    }
  }

  componentDidMount() {
    this.evt1.current.style.display = "block"
    var bt1 = document.getElementById("bt1")
    bt1.className += " active"
  }

  render() {
    
      const items = []
      for (let i = 0; i < 8; i++) {
        items.push(
          <div className="flexChild">
            <img
              src={handbag}
              alt="h1"
              id="img1"
            />
            <p> handbag </p>
            <p>CA$240</p>
          </div>
        )
      }
    
      
    return (
      <div>
        <div className="tab">
          <button
            id="bt1"
            className="tablinks "
            onClick={(e) => {
              this.openCity("evt1", e)
            }}
          >
            Top Deals
          </button>
          <button
            id="bt2"
            className="tablinks"
            onClick={(e) => {
              this.openCity("evt2", e)
            }}
          >
            New In
          </button>
          <button
            id="bt3"
            className="tablinks"
            onClick={(e) => {
              this.openCity("evt3", e)
            }}
          >
            Most Liked
          </button>
        </div>

        <div ref={this.evt1} className="tabcontent">
          <div className="flexContainer">{items}</div>
        </div>

        <div ref={this.evt2} className="tabcontent">
          <div className="flexContainer">{items}</div>
        </div>

        <div ref={this.evt3} className="tabcontent">
          <div className="flexContainer">{items}</div>
        </div>
      </div>
    )
  }
}
