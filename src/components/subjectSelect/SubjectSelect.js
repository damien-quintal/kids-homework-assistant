import React, { Component } from 'react';

import './SubjectSelect.css';

import { SUBJECT_SELECT_SUBJECTS } from './SubjectSelectConstants';

class SubjectSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: props.subject,
      subjectDetails: SUBJECT_SELECT_SUBJECTS[props.subject]
    }
  }

  handleSubjectSelect(e) {
    console.log("this", this);
    this.props.selectedSubject(this.state.subject);
  };

  render() {
    return (
      <div className="SubjectSelect" onClick={this.handleSubjectSelect.bind(this)}>
        <div className="SubjectSelect-header">
          <h3>{this.state.subjectDetails.name}</h3>
        </div>
        <div className="SubjectSelect-logo">
          {this.state.subjectDetails.logo}
        </div>
      </div>
    );
  }
}


export default SubjectSelect;