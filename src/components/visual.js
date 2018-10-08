import React, { Component } from 'react';

class StenoTitleSection extends Component {
    render() {
      return (
        <div className="titlebox">
          <img src={require('./toplogo.png')} alt="Steno Logo" />
        </div>
      );
    }
  }

  export default StenoTitleSection;