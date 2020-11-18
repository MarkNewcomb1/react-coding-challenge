import React from 'react';
import { BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom';

import Home from './components/Home';
import Series from './components/Series';
import Movies from './components/Movies';

function App() {
  return (
<Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/series'>Series</Link>
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
      </ul>
    </nav>
  </div>

  <Switch>
    <Route path='/' exact>
      <Home />
    </Route>
    <Route path='/series' exact>
      <Series />
    </Route>
    <Route path='/movies' exact>
      <Movies />
    </Route>
  </Switch>
</Router>
  );
}

export default App;
