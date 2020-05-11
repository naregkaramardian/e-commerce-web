import React from "react"
import "./hero.styles.scss"

export default function SlideShow() {
  return (
    <div className="slideshow">
      <div className="slide">
        <span>Image 01</span>
        <div>
          <h3>Shop our new collection1</h3>
          <p>Find the perfect item for you1</p>
          <a href="#shop">Shop Now</a>
        </div>
      </div>

      <div className="slide">
        <span>Image 02</span>
        <div>
          <h3>Shop our new collection2</h3>
          <p>Find the perfect item for you2</p>
          <a href="#shop2">Shop Now</a>
        </div>
      </div>

      <div className="slide">
        <span>Image 03</span>
        <div>
          <h3>Shop our new collection</h3>
          <p>Find the perfect item for you</p>
          <a href="#shop3">Shop Now</a>
        </div>
      </div>

      <div className="slide">
        <span>Image 04</span>
        <div>
          <h3>Shop our new collection4</h3>
          <p>Find the perfect item for you4</p>
          <a href="#shop4">Shop Now</a>
        </div>
      </div>

      <div className="slide">
        <span>Image 05</span>
        <div>
          <h3>Shop our new collection5</h3>
          <p>Find the perfect item for you</p>
          <a href="#shop5">Shop Now 333</a>
        </div>
      </div>

      <div className="slide">
        <span>Image 06</span>
        <div>
          <h3>Shop our new collection</h3>
          <p>Find the perfect item for you</p>
          <a href="#shop7">Shop Now 222</a>
        </div>
      </div>
    </div>
  )
}
