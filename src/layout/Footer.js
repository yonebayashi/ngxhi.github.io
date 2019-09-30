import React, { Component } from 'react';
import fb from '../assets/images/facebook-logo.png';
import li from '../assets/images/linkedin.png';
// import insta from '../assets/images/instagram.png';
import github from '../assets/images/github-logo.png';
import '../styles/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          © Hien Nguyen 2019
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/nguyehi.7">
            <img src={fb} alt="facebook-icon" />
          </a>

          <a href="https://www.linkedin.com/in/nguyehi/">
            <img src={li} alt="linkedin-icon" />
          </a>

          {/* <a href="https://www.instagram.com/saiko_psycho/">
            <img src={insta} alt="instagram-icon" />
          </a> */}

          <a href="https://github.com/yonebayashi" with_target="_blank">
            <img src={github} alt="github-icon" />
          </a>
        </div>
      </div>
    )
  }
}