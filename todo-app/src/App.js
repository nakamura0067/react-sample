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

export default function App() {
    return (
      <div>
        <header>todo-app</header>
        <Router>
          <main>
            <Switch>
              <Route exact path="/" component={Top}/>
              <Route path="/todo" component={Todo} />
              <Route path="/schedule" component={Schedule}/>
              <Route path="/note" component={Note}/>
            </Switch>
         </main>
        <footer>
          <div>
           <p><Link to="/todo">todo</Link></p>
           <p><Link to="/schedule">Schedule</Link></p>
           <p><Link to="/note">Note</Link></p>
          </div>
        </footer>
      </Router>
      </div>
    );
}
