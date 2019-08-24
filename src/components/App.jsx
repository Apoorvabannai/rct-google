import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import StreamCreate  from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return(
    <div className='ui container' style={{ marginTop: 10 }}>
      <HashRouter>
        <div>
          <HeaderComponent />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/show' exact component={StreamShow} />
          <Route path='/stream/delete' exact component={StreamDelete} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;

// 945584351537-hdua2fofev6d31n91fi6f8uos5itgj7d.apps.googleusercontent.com