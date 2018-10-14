import React, { Component } from 'react'
import Question from './components/Question'
import Price from './components/Price'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-main-div">
          <Question />
          <Price />
      </div>
    );
  }
}

export default App
