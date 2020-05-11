import React, { Component } from "react"
import "./homepage.styles.scss"

// components

import Parallex from "../../components/parallex/parallex.component"
import FuturedProducts from "../../components/futuredProducts/futuredProducts.component"
import Hero from '../../components/hero/hero.component'

export default class Homepage extends Component {
  render() {
    return (
      <div>
          
            <Hero />
     
        <FuturedProducts />
        <Parallex />
      </div>
    )
  }
}
