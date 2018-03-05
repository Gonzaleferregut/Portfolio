import React, { Component } from 'react'
import Flag from './Veterans'
import '../styles/contact.css'

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      jobDescription: ""
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleTextChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value // using ES6 computed property name
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    document.querySelector("form").reset();
  }

  render() {
    return(
      <section id="contact">
        <form onSubmit={this.handleSubmit}>
          <p>FOR HIRE</p>
          <div className="for-hire-inputs">
            <div className="name-email">
              <input id="inputs"className="inputs" type="text" placeholder="Name:"
              name="name"
              inputstyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>
              <input className="inputs" type="email" placeholder="Email:"
              name="email"
              inputstyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>
            </div>
            <textarea className="inputs job-description"
            name="jobDescription"
            placeholder="Job Description: "
            inputstyle={hideAutoFillColorStyle}
            onChange={this.handleTextChange}></textarea>
          </div>
          <input className="submit-form" type="submit" value="Contact Me"/>
        </form>
        <div className="back-to-top">
          <a href="#top">Back to top</a>
        </div>
        <Flag />
      </section>
    )
  }
}
