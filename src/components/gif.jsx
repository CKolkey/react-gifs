import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, changeSelectedGif } = this.props;
    changeSelectedGif(id);
  }

  render() {
    const { id } = this.props;
    const src = `https://media.giphy.com/media/${id}/200.gif`;

    return (
      <img src={src} className="gif" alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
