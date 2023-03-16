import React from 'react';

import './App.css';

import {StateMachine} from './components/StateMachine';

function App() {
  
  return <div style={{display: 'flex', alignItems: 'center',
   flexDirection: 'column', marginTop: '15vh'}}>    
    <StateMachine/>
  </div>
}

export default App;
