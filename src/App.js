import React, { Component } from 'react';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import logo from './logo.svg';
import './App.css';
import Chipper from './components/Chipper';
import SearchItem from './components/SearchItem';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Reacting</h2>
        </div>

          <Chipper />

          <br/>
          <br/>
          
          <SearchItem />

      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
