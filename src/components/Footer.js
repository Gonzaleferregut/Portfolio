import React, { Component } from 'react'
import '../styles/footer.css'

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="social-media-icons">
          <p>social media icons go here</p>
        </div>
        <div className="footer">
          <p>Porfolio by: Rigoberto Gonzaleferregut at my domain.com</p>
        </div>
      </footer>
    )
  }
}
