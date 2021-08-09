import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Todo from './Todo';
import Schedule from './Schedule';
import Note from './Note';

class Default extends React.Component {
  render() {
    return (
      <div>
        <header style={styles.header}>head</header>
        <main style={styles.main}>
          <Switch>
            <Route exact path="/todo" component={Todo} />
            <Route path="/schedule" component={Schedule}/>
            <Route path="/note" component={Note}/>
          </Switch>
        </main>
        <footer style={styles.footer}>
          <div>
          <p><Link to="/todo">todo</Link></p>
          <p><Link to="/schedule">Schedule</Link></p>
          <p><Link to="/note">Note</Link></p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Default;

//css
const styles = {
    header: {
        height: 100,
        background: "#ddd",
    },
    main: {
        height: 200,
    },
    footer: {
        height: 100,
        background: "#ddd",
    }
}