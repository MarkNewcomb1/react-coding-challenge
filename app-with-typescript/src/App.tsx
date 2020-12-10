import React from 'react';
import { useRequest } from './customHooks/useRequest';
import './App.css';

interface AllTheData {
  total: number;
  entries: Array<Entry>;
}

interface Entry {
  title: string;
  description: string;
  programType: string;
  images: ImageObject;
  releaseYear: number;
}

interface ImageObject {
  'Poster Art': PosterArtObject;
}

interface PosterArtObject {
  url: string;
  width: number;
  height: number;
}


function App() {

  const { data, loading, error }: {data: AllTheData | {}; loading: any, error: any} = useRequest('./sample.json');
  return (
    <div className="App">
      <header className="App-header">
        {loading && (<p>loading...</p>)}
        <p>{JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
