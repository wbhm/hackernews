import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/sampleData';
import Button from '@material-ui/core/Button';
import ImageOverlay from './components/ImageOverlay';
import MeetingList from './components/MeetingList';

class App extends Component {

  render() {
      const image = "assets/images/ArchesNationalPark.jpg";
      const list = data;
      const styles = {
          button:{
              margin: '25px',
              borderRadius: '1px',
              fontFamily:'Helvetica',
              fontSize:'16px',
              letterSpacing: '1px',
          }
      };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <ImageOverlay image={image} title="This is a an example of placing text over an image" subtitle="This is the placeholder for the some other text..." />
          <Button style={styles.button} variant="contained" color="primary">Sample Button</Button>
          <div>
            <MeetingList data={data}/>
          </div>
      </div>
    );
  }
}

export default App;
