import React, { Component } from 'react';
import '../styles/about.css';
import me from '../assets/images/me.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="about">

        <div className="row-1 title">
          <span>Programmer, </span>
          <br />
          <span>Thinker, Can-doer!</span>
        </div>

        <div className="line"></div>

        <div className="row-2">
          <div className="col-1">
            <p>A little about me:</p>
            <p>
              Hi there! I'm Hien. I am enjoying my final year as a Computer Science undergraduate student at Reed College in
              beautiful Portland, Oregon. I am passionate about web development. It started from my obsession with typography, and my brief time taking caligraphy classes at Reed.
              (strangely enough, this is starting to sound like Steve Jobs when he was a student at Reed...). The more I thought about typefaces and their intricacies, the more I wanted
              to create beautiful user interfaces, so I decided to give web development a try. After completing an online program in React from Udacity, I went on to
              intern at startups over the past two summers and solved interesting problems in user experiences.
              <br /><br />
              I am currently working on my senior thesis, which explores a long-standing problem in Natural Language Processing - Word Sense Disambiguation.
              This work in progress will hopefully help computers discern ambiguity in word meanings, something that our human brains seemingly are wired to be... good at.
            </p>
          </div>
          <div className="col-2">
            <img src={me} width="500px" />
          </div>
        </div>

        {/* <div className="row-3">
          <div className="col-1"></div>
          <div className="col-2">
            <p className="col-title">Skillset</p>
            <p>React.js</p>
          </div>
        </div> */}
      </div>
    )
  }
}