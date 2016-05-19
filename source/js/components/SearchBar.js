import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit (event) {
    const { onSubmit } = this.props;
    if (event.charCode !== 13) return null;
    const query = event.target.value;
    return onSubmit(query);
  }
  
  render() {
    const { defaultValue, loading, placeholder } = this.props;
    const className = `search-bar`;
    const style = {
      border: 'none',
      fontSize: '7rem',
      textAlign: 'center',
      width: '100%',
      ':focus': {
        outlineWidth: 0
      }
    };
    return (
      <input
        style={ style }
        className={ className }
        defaultValue={ defaultValue }
        disabled={ loading }
        placeholder={ placeholder }
        onKeyPress={ this.handleSubmit.bind(this) }
      />
    );
  }
}

SearchBar.propTypes = {
  defaultValue: PropTypes.string,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func
};

SearchBar.defaultProps = {
  defaultValue: '',
  loading: false,
  placeholder: '',
  onSubmit: () => {}
};

export default Radium(SearchBar);