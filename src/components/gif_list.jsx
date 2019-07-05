import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    const { gifs, changeSelectedGif } = this.props;
    return gifs.map(gif => <Gif id={gif.id} key={gif.id} changeSelectedGif={changeSelectedGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
