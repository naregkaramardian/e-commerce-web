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
          

          <div className="flexContainer">
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>

            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
          </div>
        </div>

        <div  ref={this.evt2} className="tabcontent">
          <div className="flexContainer">
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>

            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
          </div>
        </div>

        <div  ref={this.evt3} className="tabcontent">
          <div className="flexContainer">
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>

            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
            <div className="flexChild">
              <img
                src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="h1"
                id="img1"
              />
              <p>best bike ever</p>
              <p>240$</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
