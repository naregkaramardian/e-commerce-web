import React, { Component } from "react"
import "./futuredProducts.styles.scss"

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
      console.log(this.evt1.current)
    }
    if (evt === "evt2") {
      this.evt2.current.style.display= "block"
      console.log(this.evt2.current)
    }
    if (evt === "evt3") {
      this.evt3.current.style.display = "block"
      console.log(this.evt3.current)
    }
  }

  componentDidMount(){
    this.evt1.current.style.display = "block"
  }

  render() {
    return (
      <div>
        <h3>Fade in Tabs</h3>

        <div class="tab">
          <button
            class="tablinks"
            onClick={(e) => {
              this.openCity("evt1", e)
            }}
          >
            London
          </button>
          <button
            class="tablinks"
            onClick={(e) => {
              this.openCity("evt2", e)
            }}
          >
            Paris
          </button>
          <button
            class="tablinks"
            onClick={(e) => {
              this.openCity("evt3", e)
            }}
          >
            Tokyo
          </button>
        </div>

        <div id="London" ref={this.evt1} class="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" ref={this.evt2} class="tabcontent">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" ref={this.evt3} class="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </div>
    )
  }
}
