import React from 'react';
import GenerateJoke from './GenerateJoke';
import DisplayJoke from './DisplayJoke';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const sampleJoke = {
      pic: '',
      quote: '',
    };

    this.state = {
      Joke: sampleJoke ,
    };

  }
  
  getJoke() {
    // Employee collection via fetch
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {
        let jokeInf = {
          pic: data.icon_url,
          quote: data.value,
        }
        // Once the data is collected, we update our state with the new data
        this.setState({
          Joke: jokeInf,
        });
      });
  }

  render() {

    return (
      <div className="App">
        <GenerateJoke selectJoke={() => this.getJoke()} /> 
        <DisplayJoke Joke={this.state.Joke} />

      </div>
    );
  }
}

export default App;
