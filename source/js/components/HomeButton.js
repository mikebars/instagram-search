import React, { Component } from 'react';
import Radium from 'radium';

import LinkButton from './LinkButton';

class HomeButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const buttonStyle = {
      height: '5rem'
    };
    
    const path = `/`;
    
    const message = `Home`;
    
    return (
      <LinkButton
        buttonStyle={ buttonStyle }
        path={ path }
        message={ message }
      />
    );
  }
}

export default Radium(HomeButton);