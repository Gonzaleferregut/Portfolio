import React, { Component } from 'react'
import '../styles/veterans.css'

export default class Flag extends Component {
  render() {
    return(
      <div className="flag">
        <div className="top">
          <div className="box">
            <h2>Support Our Troops<span>!</span></h2>
          </div>
          <div className="box2">
            <div className="red-stripes"></div>
            <div className="red-stripes"></div>
            <div className="red-stripes"></div>
            <div className="red-stipes"></div>
            <div className="red-stripes"></div>
          </div>
        </div>
        <div className="bottom">
          <div className="red-stripes"></div>
          <div className="red-stripes"></div>
          <div className="red-stripes"></div>
        </div>
      </div>
    )
  }
}
