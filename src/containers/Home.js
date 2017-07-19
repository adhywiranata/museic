import React from 'react';
import axios from 'axios';

const styles = {
  container: {
    marginTop: -100,
    width: '100%',
    height: '97vh',
    background: '#67B26F',
    background: '-webkit-linear-gradient(to right, #4ca2cd, #67B26F)',
    background: 'linear-gradient(to right, #4ca2cd, #67B26F)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeading: {
    color: '#FFFFFF',
    fontSize: '7em',
    lineHeight: 0,
    marginTop: 0,
  },
  sectionContent: {
    color: '#F5F5F5',
    fontSize: '1.5em',
    fontWeight: 100,
    lineHeight: 0,
  },
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 40,
    boxSizing: 'border-box',
  },
  card: {
    width: '20%',
    margin: '20px 10px',
    padding: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // axios('https://api.spotify.com/v1/artists/0bAsR2unSRpn6BQPEnNlZm/albums')
    //   .then(res => this.setState({ albums: res.data.items }));
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.sectionHeading}>MUSEIC</h2>
        <p style={styles.sectionContent}>
          Spotify fan? Find out interesting data specially for you!
        </p>
      </div>
    );
  }
}

export default Home;
