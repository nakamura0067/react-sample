import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Default from './Default';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Default}/>
      </BrowserRouter>
    );
  }
}

export default App;
