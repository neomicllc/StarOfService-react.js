import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(values);
      //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 1000)
  });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form onSubmit={showResults}/>
      </div>
    );
  }
}

export default App;
