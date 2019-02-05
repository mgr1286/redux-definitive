import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/


class ExampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
          { title: 'React Redux Tutorial for Beginners', id: 1 },
          { title: 'Redux e React: cosè Redux e come usarlo con React', id: 2 }
      ]
    };
  }

  render() {
    const { articles } = this.state;
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>{articles.map( el => <li key={el.id}>{el.title}</li> )}</ul>
        </header>
      </div>
    );
  }
}

export default ExampleComponent;

// export default App;
