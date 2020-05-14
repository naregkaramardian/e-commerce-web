import React, { Component } from "react"
import "./parallex.styles.scss"

// pics
import Worldwide from './img/undraw_the_world_is_mine_nb0e.svg'
import Quality from './img/undraw_successful_purchase_uyin.svg'
import Offers from './img/undraw_discount_d4bd.svg'
import Secure from './img/undraw_shopping_app_flsj.svg'
export default class Parallex extends Component {
  render() {
    return (
      <div className="px-main">
        <div className="parallax">
          <h1> Find the perfect item in our special collection</h1>
          <a id="prl-a" href="#news">Essentials</a>
        </div>

        <div className="px-flexContainer">
          <div className="px-flexchild">
            <img src={Worldwide} alt="h1" />
            <h4>Worldwide Shipping</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div className="px-flexchild">
            <img src={Quality} alt="" />
            <h4>Best Quality</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div className="px-flexchild">
            <img src={Offers} alt="" />
            <h4>Best Offers</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div className="px-flexchild">
            <img
              src={Secure}
              alt=""
            />
            <h4>Secure Payments</h4>
            <p>
              It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>
        </div>

        <div className="px-about">
          <h3 className="aboutHeader"> ABOUT US </h3>
          <p className="aboutPar">
            Welcome to e-commerce. We are a team of enthusiastic developers and
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
