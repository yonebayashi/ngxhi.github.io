import React, { Component } from 'react';
import '../styles/card.scss';

export default class Card extends Component {
  handleClick(url) {
    window.open(url)
  }
  render() {
    return (
      <div className="card" onClick={() => this.handleClick(this.props.projectUrl)}>
        <div className="card__inner">
          <span className="card-title">{this.props.title}</span>
          <img src={this.props.imgURL} alt="thumbnail" />
          <span className="card-description">{this.props.description}</span>
        </div>
      </div>
    )
  }
}