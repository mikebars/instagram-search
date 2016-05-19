import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import SearchResult from './SearchResult';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { loading, results } = this.props;
    
    if (loading) return null;
    
    const className = `search-results clearfix`;
    const style = {
      maxWidth: '800px',
      margin: '0 auto'
    };
    
    const searchResults = results.map((result, index) => <SearchResult key={ index } result={ result } />);
    
    return (
      <div style={ style } className={ className }>
        { searchResults }
      </div>
    );
  }
}

SearchResults.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    images: PropTypes.object
  }))
};

SearchResults.defaultProps = {
  loading: false,
  results: []
};

export default Radium(SearchResults);