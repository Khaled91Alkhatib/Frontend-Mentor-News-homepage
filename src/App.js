import React from 'react';
import './App.scss';
import Homepage from './components/Homepage/Homepage';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='full-page'>
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
