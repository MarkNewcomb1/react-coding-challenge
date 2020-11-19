import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Series from './components/Series';
import Movies from './components/Movies';
import Footer from './components/Footer';

function App() {

  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  const processData = (entries) => {
    let slicedAndDiced = entries.filter(entry => entry.releaseYear >= 2010).sort((a, b) => a.title.localeCompare(b.title));
    return slicedAndDiced;
  }

  const filterData = (arr, criteria) => {
    return arr.filter(entry => entry.programType === criteria).slice(0, 21);
  }

  const fetchData = useCallback(() => {
    fetch('./sample.json')
    .then(response => response.json())
    .then(results => {
      const processedResults = processData(results.entries);
      setMovieData(filterData(processedResults, 'movie'));
      setSeriesData(filterData(processedResults, 'series'));
    })
  })

  useEffect(() => {
    fetchData();
  }, []);

  return (
<Router>
    <Header />
    <div className="content">
  <Switch>
    <Route path='/' exact>
      <Home />
    </Route>
    <Route path='/series' exact>
      <Series 
      seriesEntries={seriesData}
      />
    </Route>
    <Route path='/movies' exact>
      <Movies 
      movieEntries={movieData}
      />
    </Route>
  </Switch>
  </div>
  <Footer />
</Router>
  );
}

export default App;
