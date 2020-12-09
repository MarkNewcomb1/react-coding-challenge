import React from 'react';
import { useRequest } from './customHooks/useRequest';
import './App.css';

function App() {

  const { data, loading, error } = useRequest('./sample.json');
  return (
    <div className="App">
      <header className="App-header">
        <p>hello</p>
        <p>{JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
