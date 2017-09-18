import React, {Component} from 'react';
import {Card, CardTitle, CardMedia, CardText} from 'material-ui/Card'

const styles = {
  appCard: {
    display: 'inline-block',
    width: 200,
    height: 270,
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
  }
}
class SearchItem extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  render () {
    return (
      <div>
        <Card style={styles.appCard}>
          <CardMedia style={styles.appMedia}>
          </CardMedia>

          <CardTitle
            titleStyle={styles.title}
            title={"Item"}
            subtitle="Application"
          />
          <CardText>
            <div>
              <div>Status:
                <b></b>
              </div>
            </div>
          </CardText>

        </Card>
      </div>
    );
  }
}

export default SearchItem;
