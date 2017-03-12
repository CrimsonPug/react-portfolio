import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './../styles/css/About.css';
import Me from './../img/ikram_2.png';

class About extends Component {
  render() {
    return (
      <div className="about">
        <NavBar />
        <div className="about-container row">
          <div className="img-wrapper col-lg-6">
            <img src={Me} />
          </div>
          <div className="info-wrapper col-lg-6">
            <h1>About Ikram</h1>
            <p>I am a full stack developer who enjoy develop scalable project, and create simple intuitive interfaces.</p>
            <p>Currently based in Toronto, Canada, is Front-End Developer at Ballprk.</p>
            <p>In my free time, I like chasing frisbee, devour all you can eat sushi, and looking for new ways to use technology to help non-profit cause.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
