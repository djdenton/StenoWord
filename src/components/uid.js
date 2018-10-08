import React, { Component } from 'react';

function UID(props){
    return(
      <form className="innerbox2">
      <p>Dictation UID</p>
        <input type="text" value={props.uid} onChange={props.onUIDChange} />
      </form>
    );
}

export default UID;