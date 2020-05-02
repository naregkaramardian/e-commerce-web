import React, { Component } from "react"
import './parallex.styles.scss'



export default class Parallex extends Component {
  render() {
    return (
      <div>
        <p>
          Scroll Up and Down this page to see the parallax scrolling effect.
        </p>

        <div className="parallax">
          <h1 class="h1"> Hi my name is hhhhh </h1>
        </div>

        <div className="div1">
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect.
        </div>
      </div>
    )
  }
}
