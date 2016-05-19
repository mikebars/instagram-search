import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { result: { link, images } } = this.props;
    const className = `search-result col-xs-12 col-sm-6 col-md-4 col-lg-3`;
    const imageUrl = getImageUrlFromImages(images);
    const style = {
      backgroundImage: `url(${imageUrl})`,
      height: '25rem',
      margin: '2rem auto',
      backgroundOrigin: 'content-box',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer'
    };
    return (
      <div onClick={ () => window.open(link) } style={ style } className={ className } />
    );
  }
}

SearchResult.propTypes = {
  result: PropTypes.shape({
    link: PropTypes.string,
    images: PropTypes.object
  })
};

SearchResult.defaultProps = {
  result: {
    link: '',
    images: []
  }
};

export default Radium(SearchResult);

function getImageUrlFromImages(images = {}) {
  if (images.standard_resolution) {
    return images.standard_resolution.url;
  }
  if (images.low_resolution) {
    return images.low_resolution.url;
  }
  if (images.thumbnail) {
    return images.thumbnail.url;
  }
}