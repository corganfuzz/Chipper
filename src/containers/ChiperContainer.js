import React , {Component} from 'react';
import ChipInput from 'material-ui-chip-input';
import JSONP from 'jsonp';

 const googleAutoSuggestURL = `
   //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

 const APIk = 'AIzaSyA8cOPpMYBZuZUStD7YVLYi_sq2kVXgMYA'
 const result = 4
 const realURL = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=${result}&key=${APIk}`


 class Chipper extends Component {
   constructor(props) {
     super(props);
     this.onUpdateInput = this.onUpdateInput.bind(this);
     this.onNewRequest = this.onNewRequest.bind(this);

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

        let searchResults;
        let retrievedSearchTerms;

          if (error) return error;

            searchResults = data[1];

        retrievedSearchTerms = searchResults.map(function(result){
          return result[0];
        });

        self.setState({
          dataSource: retrievedSearchTerms,
          inputValue: self.state.inputValue
        })
      });
    }
  }


  onNewRequest (searchTerm) {
    const self = this,
          LAST_URL = `${realURL}&q=${this.state.inputValue}`;

    fetch (LAST_URL)
      .then((response) => response.json())
        .then((results) => {

          self.props.callback(results.items, searchTerm);

              self.setState({
                dataSource: [],
                inputValue: self.state.inputValue
              })
        })
  }

  render () {
    // console.log('input', this.state.inputValue)
    return (
      <div>
        <ChipInput
          fullWidth={true}
          dataSource={this.state.dataSource}
          onUpdateInput={this.onUpdateInput}
          onChange={this.onNewRequest}
        />
      </div>
    );
  }
}

export default Chipper;
