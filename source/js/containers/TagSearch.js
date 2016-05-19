import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import HomeButton from '../components/HomeButton';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import LoadMoreButton from '../components/LoadMoreButton';

import * as actionCreators from '../actions/actionCreators';

import { sanitizeTagInput } from '../helpers/utilities';

class TagSearch extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillUpdate(nextProps, nextState) {
    const { actions: { getSearchResults }, params: { tag: currTag } } = this.props;
    const { params: { tag: nextTag } } = nextProps;
    if (!nextTag || (currTag === nextTag)) return null;
    return getSearchResults(nextTag);
  }
  
  componentDidMount() {
    const { actions: { getSearchResults }, params: { tag } } = this.props;
    if (!tag) return null;
    return getSearchResults(tag);
  }
  
  componentWillUnmount() {
    const { actions: { resetState } } = this.props;
    return resetState();
  }
  
  changeTagSearch(tag) {
    const { actions: { pushLocationToHistory } } = this.props;
    const location = `/tag/${ sanitizeTagInput(tag) }`;
    return pushLocationToHistory(location);
  }
  
  render() {
    const { actions: { getUrlResults }, params: { tag }, loading, results, url } = this.props;
    const message = `Tag Search`;
    const placeholder = `#`;
    
    return (
      <div className='tag-search'>
        <HomeButton />
        <Header message={ message } />
        <SearchBar
          defaultValue={ tag }
          loading={ loading }
          placeholder={ placeholder }
          onSubmit={ this.changeTagSearch.bind(this) }
        />
        <SearchResults loading={ loading } results={ results } />
        <LoadMoreButton loading={ loading } more={ !!url } loadMore={ getUrlResults } />
      </div>
    );
  }
}

TagSearch.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.object),
  url: PropTypes.string
};

TagSearch.defaultProps = {
  loading: false,
  results: [],
  url: ''
};

TagSearch.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    results: state.results,
    url: state.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagSearch);