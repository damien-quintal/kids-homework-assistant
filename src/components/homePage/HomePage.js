import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Third-party component import
import SubjectSelect from './components/subjectSelect/SubjectSelect';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get things started, simply pick a subject below.
        </p>
        <div className='App-row-container'>
          <SubjectSelect subject='addition'></SubjectSelect>
          <SubjectSelect subject='subtraction'></SubjectSelect>
        </div>
        <div className='App-row-container'>
          <SubjectSelect subject='multiplication'></SubjectSelect>
          <SubjectSelect subject='division'></SubjectSelect>
        </div>
      </div>
    );
  }
}

export default HomePage;