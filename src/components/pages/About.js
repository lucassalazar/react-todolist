import React from 'react';

function About() {
  return (
    <React.Fragment>
        <div style={aboutStyle}>
            <h1>About</h1>
            <p>This is the To Do List app v.1.0.0. <br />It is part of my studies about React.</p>
        </div>
    </React.Fragment>
  );
}

const aboutStyle = {
    backgroundColor: '#0006', 
    fontSize: '1em', 
    color: '#fff', 
    padding: '2vw',
    textAlign: 'center'
}

export default About;