import React, { Component } from 'react'
import FirstProject from '../images/HelioProject.png'
import SecondProject from '../images/ReactApp.png'
import ThirdProject from '../images/ReactApp.png'
import '../styles/projects.css'

export default class Projects extends Component {
  render() {
    return(
      <section id="projects">
      <h1>Projects</h1>
      <div className="">
        <div className="project-contain">
          <div className="project-img">
            <img className="firstProject" src={FirstProject} alt="screen shot2" />
          </div>
          <div className="project-link">
            <a href="https://github.com/Gonzaleferregut/about-me/blob/master/index.html">Project1</a>
          </div>
          <p>This was my first project I completed this for a friend purely html and css.  Now in hinesight I plan on converting this project into a react project. I believe I can achieve the same results with less code.</p>
        </div>
        <div className="project-contain middleP">
          <div className="project-img">
            <img className="secondProject" src={SecondProject} alt="screen shot2" />
          </div>
          <div className="project-link">
            <a href="https://github.com/Gonzaleferregut/rigos-final-project">Project2</a>
          </div>
          <p>This is my first React project. I learned a lot about React during this process. A lot of the learning was trial and error. I look forward to learning some new technologies to work side by side with React to make my coding journey much more productive.</p>
        </div>
        <div className="project-contain">
          <div className="project-img">
            <img className="thirdProject" src={ThirdProject} alt="screen shot2" />
          </div>
          <div className="project-link">
            <a href="sers/rigo/Documents/projects1/portfolio-html/index.html?#projects">Project3</a>
          </div>
          <p>This is some info on what I learned during this project</p>
        </div>
      </div>
      <div className="back-to-top">
        <a href="#top">Back to top</a>
      </div>
    </section>
    )
  }
}
