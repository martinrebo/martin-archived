import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Hero from './Components/Hero';
import Work from './Components/Work';
import Lab from './Components/Lab';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
<Hero/>
<br/>
<Work/>
<br/>
<Lab/>
<br/>
<Contact/>



      </div>
    );
  }
}

export default App;
