import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import '../styles/home.css'


class Home extends Component {
  render() {
    return(
      <div className="Home">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

// this.props.history.push('/')

export default (withRouter(Home))
