import React, { Component } from 'react';
import './SubjectSelect.css';
import { SUBJECT_SELECT_SUBJECTS } from './SubjectSelectConstants';

class SubjectSelect extends Component {
  render() {
    let subject = this.props.subject;
    let subjectDetails = SUBJECT_SELECT_SUBJECTS[subject];

    let goToSubject = function(item) {
      console.log("subject clicked", item);
    };

    return (
      <div className="SubjectSelect" onClick={(i) => goToSubject(i)}>
        <div className="SubjectSelect-header">
          <h3>{subjectDetails.name}</h3>
        </div>
        <div className="SubjectSelect-logo">
          {subjectDetails.logo}
        </div>
      </div>
    );
  }
}

export default SubjectSelect;