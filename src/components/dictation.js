import React, { Component } from 'react';

function DICTATION(props){
    const dictation = props.dictation;
    const listSections = Object.keys(dictation).map((key) => <div key={key}>{dictation[key]}</div>);
  
    return(
      <div className="innerbox3">
        <ul>{listSections}</ul>
      </div>
      
    );
  }

  export default DICTATION;