import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/sampleData';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
      const list = data;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Button variant="contained" color="primary">Sample Button </Button>
          <div>
              {
                  list.map((item)=>{
                      return <div key={item.id}>{item.name}</div>
                  })
              }
          </div>
      </div>
    );
  }
}

export default App;
