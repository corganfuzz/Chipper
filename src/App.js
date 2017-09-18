import React, { Component } from 'react';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import logo from './logo.svg';
import './App.css';
import ChipperContainer from './containers/ChiperContainer';
import SearchItem from './components/SearchItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: ''
    }
    this.yourCallback = this.yourCallback.bind(this)
  }

  yourCallback (searchResults) {
    this.setState({searchResults})
    console.log('searchResults', searchResults)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Reacting</h2>
        </div>

          <ChipperContainer
            callback={this.yourCallback}
          />

          <br/>
          <br/>
          {
            this.state.searchResults !== ''
            ? this.state.searchResults.map(
              (r, k) => <div key={k}>{r.snippet.title}</div>
            )
            : <div></div>
          }

          <SearchItem />

      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
