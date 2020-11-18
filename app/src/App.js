import React from 'react';
import { BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Series from './components/Series';
import Movies from './components/Movies';
import Footer from './components/Footer';

function App() {
  return (
<Router>
    <Header />
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
  <Footer />
</Router>
  );
}

export default App;
