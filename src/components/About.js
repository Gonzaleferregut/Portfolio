import React, { Component } from 'react'
import Me from '../images/PicOfMe.jpg'
import htmllogo from '../images/html-css.jpg'
import reactjslogo from '../images/reactjs.png'
import react from '../images/react.jpg'
import graphqllogo from '../images/graphql.png'
import '../styles/about.css'

export default class About extends Component {
  render() {
    return(
      <section id="about-me">
        <h1>About Me</h1>
        <div className="me">
          <img className="myPic" src={Me} alt="Author"/>
        </div>
        <div className="about-text">
          <p>
            Hi my name is Rigoberto, and i Love coding!!!
          </p>
          <p>
            It all started after the Navy, I was an Information Systems Specialist, studied and worked as a system administrator and computer technician, as I did in the Navy. However, I quickly realized that, networking is not where my passion lies. I love the idea of building something from nothing, or helping someone with their problems, So coding was my solution. I was exposed to coding through a friend that teaches children coding.
          </p>
          <p>
            Now that I know my direction, next is to follow the right road to get where I want to be, and thats preferably on a team solving problems for users. So my journey took me through some online free resources. Basicly learning the basics of html, css, javascript. Now that I know the necessaries I can focus on different frameworks and stacks that I may want to learn.
          </p>
          <p>
            Recently I completed a fullstack javascript coding bootcamp. I got to explore node, express, react, and graphql.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="tech-images">
          <img className="logo" src={htmllogo} alt="html & css logos"/>
          <img className="react-logo" src={reactjslogo} alt="react logo"/>
          <img className="logo" src={graphqllogo} alt="graphql logo"/>
        </div>
        <div className="react">
          <img className="react-pic" src={react} alt="The word React"/>
        </div>
        <div className="back-to-top">
          <a href="#top">Back to top</a>
        </div>
      </section>
    )
  }
}
