import React from 'react';
import './App.css';

import { Name } from './pages/Name';

const App: React.FC =() => {

function Show () {
  return (
    <Name />
  )
}

  return (
    <div className="App">
        <button onClick={Show}>Show</button>
    </div>
  );
}

export default App;
