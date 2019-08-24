import React from 'react';
import { Link } from 'react-router-dom';
import GoogleApi from '../GoogleApi';

const HeaderComponent = () => {
  return(
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streams
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          AllStreams
        </Link>
        <GoogleApi />
      </div>
    </div>
  )
};

export default HeaderComponent;

// 
