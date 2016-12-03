import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor() {
    super();
    this.state = { waitTime: 5 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tickOrRedirect(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tickOrRedirect() {
    if(this.state.waitTime > 1) {
      this.tick(this.state.waitTime - 1);
    } else {
      this.props.goToQuestions();
    }
  }

  tick(wait) {
    this.setState({
      waitTime: wait
    });
  }

  render() {
    return (
      <div className="Timer-body">
        <span className="Timer-value">{this.state.waitTime}</span>
      </div>
    );
  }
}

export default Timer;