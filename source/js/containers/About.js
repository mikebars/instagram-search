import React, { Component } from 'react';

import Header from '../components/Header';
import LinkButton from '../components/LinkButton';

class About extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const message = `Instagram Search`;
    
    const tagSearchPath = `/tag`;
    const tagSearchMessage = 'Tag Search';
    const tagSearchLink = <LinkButton path={ tagSearchPath } message={ tagSearchMessage }/>;
    
    return (
      <div className='about'>
        <Header message={ message } />
        { tagSearchLink }
      </div>
    );
  }
}

export default About;