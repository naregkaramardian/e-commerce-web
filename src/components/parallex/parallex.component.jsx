import React, { Component } from "react"
import "./parallex.styles.scss"

export default class Parallex extends Component {
  render() {
    return (
      <div>
       
        <div className="parallax">
          <h1 className="h1"> Hi my name is hhhhh </h1>
        </div>

        <div className="div1">
          <h3 className='aboutHeader'> ABOUT US </h3>
          <p className='aboutPar'>
            Welcome to bagsity.com. We are a team of enthusiastic developers and
            entrepreneurs who decided to convert their common experience into
            this web store. We hope you’ll like it as much as we do and have a
            great shopping experience here. Our prime goal is to create a shop
            in which you can easily find whatever product you need.
          </p>
        </div>
      </div>
    )
  }
}
