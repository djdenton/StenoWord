import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import StenoTitleSection from './components/visual.js';
import DICTATION from './components/dictation.js';
import UID from './components/uid.js';
import Shim from './components/shim.js';

// Added firebase
// When UID changes test whether a dictation exists with the same ID.
// If valid then bind the dictation to the paragraph




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
      <StenoTitleSection />
      <Shim />
        <div id="content-main">
          <div className="padding">
              <UID 
                uid={this.state.uid}
                onUIDChange={this.handleUIDChange}
              />
              <Shim />
              <DICTATION dictation={this.state.dictation}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;