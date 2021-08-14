import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Top from './Top';
import Todo from './Todo';
import Schedule from './Schedule';
import Note from './Note';
import Footer from './Footer';

export default function App() {
    return (
      <div>
        <Router>
          <main>
            <Switch>
              <Route exact path="/" component={Top}/>
              <Route path="/todo" component={Todo} />
              <Route path="/schedule" component={Schedule}/>
              <Route path="/note" component={Note}/>
            </Switch>
         </main>
        <Footer/>
      </Router>
      </div>
    );
}
