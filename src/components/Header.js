import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import '../styles/header.css'

export default class Header extends Component {
  render() {
    return(
      <header>
        <div className="img">
          <div className="header">
            <div className="header-text">
              <h1>Rigoberto Gonzaleferregut</h1>
              <a href="https://en.wikipedia.org/wiki/Web_developer" className="fullstack-link"><small>Full Stack Developer</small></a>
            </div>
            <div className="header-links">
              <a href="#about-me">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
