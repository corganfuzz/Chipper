import React, {Component} from 'react';
import {Card, CardTitle, CardMedia, CardText} from 'material-ui/Card'

const styles = {
  appCard: {
    display: 'inline-block',
    width: 200,
    height: 'auto',
    margin: 10,
    textAlign: 'left',
    cursor: 'pointer',
    position: 'relative'
  },
  appMedia: {
    backgroundColor: 'gray',
    width: 200,
    height: 120
  },
  title:{
    fontSize: 18,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  sub:{
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
}
class SearchItem extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  render () {

    const {applications} = this.props;


    return (
      <div>
      {
        applications.map((app, k) => {
          return (
            <Card key={k} style={styles.appCard}>
              <CardMedia style={styles.appMedia}>
              </CardMedia>
              <CardTitle
                key={k}
                titleStyle={styles.title}
                title={app.snippet.title}
                subtitle={app.snippet.channelTitle}
                subtitleStyle={styles.sub}
              />
              <CardText>
                <div>
                  <div>
                    {app.snippet.description}
                  </div>
                </div>
              </CardText>
            </Card>
          );
        })
      }
      </div>
    );
  }
}

export default SearchItem;
