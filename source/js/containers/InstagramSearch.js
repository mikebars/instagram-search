import React, { Component } from 'react';

class InstagramSearch extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='instagram-search'>
        { this.props.children }
      </div>
    );
  }
}

export default InstagramSearch;