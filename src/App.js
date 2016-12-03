import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Third-party component import
import SubjectSelect from './components/subjectSelect/SubjectSelect';
import Timer from './components/timer/Timer';
import Questions from './components/questions/Questions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedSubject: null,
      timerComplete: false
    }
  }

  setSelectedSubject(item) {
    this.setState({ selectedSubject: item });
  }

  goToQuestions() {
    this.setState({ 
      timerComplete: true
    });
  }

  updateTimerComplete() {
    this.setState({ 
      timerComplete: !this.state.timerComplete
    });
  }

  render() {
    if(this.state.selectedSubject === null) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to the Kids Homework Assistant tool!</h1>
          </div>
          <div className="App-body" id='App-body'>
            <p className="App-intro">
              To get things started, simply pick a subject below.
            </p>
            <div className='App-row-container'>
              <SubjectSelect subject='addition' selectedSubject={this.setSelectedSubject.bind(this)}></SubjectSelect>
              <SubjectSelect subject='subtraction' selectedSubject={this.setSelectedSubject.bind(this)}></SubjectSelect>
            </div>
            <div className='App-row-container'>
              <SubjectSelect subject='multiplication' selectedSubject={this.setSelectedSubject.bind(this)}></SubjectSelect>
              <SubjectSelect subject='division' selectedSubject={this.setSelectedSubject.bind(this)}></SubjectSelect>
            </div>
          </div>
        </div>
      );
    } else if(this.state.selectedSubject && !this.state.timerComplete) {
      return (
        <Timer
          selectedSubject={this.state.selectedSubject}
          goToQuestions={this.goToQuestions.bind(this)}
        />
      );
    } else {
      return (<Questions />);
    }
  }
}

export default App;
