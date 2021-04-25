import React from 'react';
import './App.css';

import { Name } from './pages/Name';

const App: React.FC = () => {

  return (
    <div className="App">
        <Name />
        <button onClick={() => ({isShowing : true})}>Click</button>
    </div>
  );
}

export default App;
