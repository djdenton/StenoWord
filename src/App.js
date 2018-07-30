import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

// Added firebase
// When UID changes test whether a dictation exists with the same ID.
// If valid then bind the dictation to the paragraph


function UID(props){
    return(
      <form>
        <input type="text" value={props.uid} onChange={props.onUIDChange} />
      </form>
    );
}

function DICTATION(props){
  const dictation = props.dictation;
  const listSections = Object.keys(dictation).map((key) => <li key={key}>{dictation[key]}</li>);

  return(
    <ul>{listSections}</ul>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.handleUIDChange = this.handleUIDChange.bind(this); //You can use arrow functions instead of bind
    this.state = {
      uid:'',
      dictation:'',
    };
  }

  handleUIDChange(event) {
    var newUID = event.target.value; //Or could use a callback on setState
    this.setState({uid:newUID});
    const setDictation = (snapshot) => {this.setState({dictation:snapshot})};
    firebase.database().ref('Dictations/' + newUID).on('value',function(snapshot){
      if(snapshot.exists()){
        setDictation(snapshot.val());
       };
    });
  }

  render() {
    return (
      <div className="App">
        <div id="content-main">
          <div className="padding">
              <p>Type the dictation UID here</p>
              <UID 
                uid={this.state.uid}
                onUIDChange={this.handleUIDChange}
              />
              <DICTATION dictation={this.state.dictation}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;