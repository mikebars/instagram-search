import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { message } = this.props;
    const className = `header`;
    const style = {
      textAlign: 'center',
      fontSize: '4rem',
      margin: '2rem auto'
    };
    return (
      <header style={ style } className={ className }>
        { message }
      </header>
    );
  }
}

Header.propTypes = {
  message: PropTypes.string
};

Header.defaultProps = {
  message: ''
};

export default Radium(Header);