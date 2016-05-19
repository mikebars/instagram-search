import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

class LinkButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      path,
      message,
      linkStyle,
      buttonStyle,
      linkClassName,
      buttonClassName
    } = this.props;
    
    const defaultLinkStyle = {
      display: 'block',
      maxWidth: '800px',
      margin: '0 auto',
      border: 'none',
      color: '#FFF',
      outline: 'none'
    };
    
    const mergedLinkStyle = Object.assign({}, defaultLinkStyle, linkStyle);
    
    const defaultButtonStyle = {
      width: '100%',
      height: '10rem',
      backgroundColor: '#333',
      border: 'none',
      outline: 'none',
      ':focus' : {
        outlineWidth: 0
      }
    };
    
    const mergedButtonStyle = Object.assign({}, defaultButtonStyle, buttonStyle);
    
    return (
      <Link style={ mergedLinkStyle } className={ linkClassName } to={ path }>
        <button style={ mergedButtonStyle } className={ buttonClassName }>
          { message }
        </button>
      </Link>
    );
  }
}

LinkButton.propTypes = {
  path: PropTypes.string,
  message: PropTypes.string,
  linkStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  linkClassName: PropTypes.string,
  buttonClassName: PropTypes.string
};

LinkButton.defaultProps = {
  path: '',
  message: '',
  linkStyle: {},
  buttonStyle: {},
  linkClassName: '',
  buttonClassName: ''
};

export default Radium(LinkButton);