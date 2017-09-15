import React , {Component} from 'react';
import ChipInput from 'material-ui-chip-input';
import JSONP from 'jsonp';

 const googleAutoSuggestURL = `
   //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

 // const APIk = 'AIzaSyA8cOPpMYBZuZUStD7YVLYi_sq2kVXgMYA'
 // const result = 2
 // const realURL = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=${result}&key=${APIk}`


class Chipper extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);

    this.state = {
      inputValue: '',
      dataSource: []
    };
  }

  onUpdateInput(inputValue) {
    const self = this;
    this.setState ({
      inputValue: inputValue
    }, function() {
      self.performSearch();
    });
  }

  performSearch() {
    const self = this,
          AUTO_URL =  googleAutoSuggestURL + this.state.inputValue;

    if (this.state.inputValue !== '') {
      JSONP(AUTO_URL, function(error,data){
        let searchResults, retrievedSearchTerms;
        if (error) return error;
        searchResults = data[1];
        retrievedSearchTerms = searchResults.map(function(result){
          return result[0];
        });
        self.setState({
          dataSource: retrievedSearchTerms
        })
      });
    }
  }

  render () {
    return (
      <div>
        <ChipInput
          fullWidth={true}
          searchText={this.state.inputValue}
          dataSource={this.state.dataSource}
          onUpdateInput={this.onUpdateInput}
        />
      </div>
    );
  }
}

export default Chipper;
