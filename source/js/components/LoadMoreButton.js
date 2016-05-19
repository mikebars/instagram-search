import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { loading, more, loadMore } = this.props;
    
    if (loading || !more) return null;
    
    const message = `Load more`;
    const className = 'load-more';
    const style = {
      border: '1px solid',
      borderRadius: '50%',
      height: '20rem',
      width: '20rem',
      margin: '2rem auto',
      display: 'block',
      backgroundColor: '#FFF',
      ':focus' : {
        outlineWidth: 0
      }
    }
    return (
      <button onClick={ loadMore } style={ style } className={ className }>
        { message }
      </button>
    );
  }
}

LoadMoreButton.propTypes = {
  loading: PropTypes.bool,
  more: PropTypes.bool,
  loadMore: PropTypes.func
};

LoadMoreButton.defaultProps = {
  loading: false,
  more: false,
  loadMore: () => {}
};

export default Radium(LoadMoreButton);