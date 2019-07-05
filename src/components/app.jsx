import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: ""
    };
  }

  changeSelectedGif = (gif) => {
    this.setState({
      selectedGif: gif
    });
  }

  search = (query) => {
    giphy('81GGdOnMmTlEJC2K8qHKhv1TcT5ufF6T').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    const { selectedGif, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
