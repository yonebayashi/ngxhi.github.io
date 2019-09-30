import React, { Component } from 'react';
import '../styles/portfolio.css';
import Card from '../components/Card';
import angularNoti from '../assets/images/Capture.PNG';
import magicFrames from '../assets/images/magic-frames.PNG';
import twitterDepression from '../assets/images/twt-depression.PNG';
import quizlit from '../assets/images/quizlit.gif';
import reactNewsfeed from '../assets/images/react-newsfeed.PNG';
import nightbus from '../assets/images/nightbus.PNG';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Card
          title="Twitter Depression Detection"
          imgURL={twitterDepression}
          description="Using Machine Learning to analyze 10,000 tweets for signs of depression"
          projectUrl="https://github.com/yonebayashi/nlp-twitter-depression-detection"
        />

        <Card
          title="Angular Notifications"
          imgURL={angularNoti}
          description="A real-time notifications menu in AngularJS + Firebase"
          projectUrl="https://logosnews.tech/auth/login"
        />

        <Card
          title="Magic Frames"
          imgURL={magicFrames}
          description="A video alignment tool in C++. Class project for Computer Vision."
          projectUrl="https://vimeo.com/user41043913/review/363252637/8e9c0457ef"
        />

        <Card
          title="QuizLit"
          imgURL={quizlit}
          description="An Android flashcard app that lets you organize your flashcards, take quizzes and reminds you to study!"
          projectUrl="https://vimeo.com/user41043913/review/363255373/1320cd4304"
        />

        <Card
          title="React Social Newsfeed"
          imgURL={reactNewsfeed}
          description="A React web app for all your social activities!"
          projectUrl="https://fierce-dusk-60480.herokuapp.com"
        />

        <Card
          title="NightBus"
          imgURL={nightbus}
          description="A web app to manage the operation of the nightbus service at Reed College."
          projectUrl="https://reed-college-nightbus.herokuapp.com/"
        />
      </div>
    )
  }
}