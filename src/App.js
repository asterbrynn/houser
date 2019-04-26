import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import router from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        {router}
      </div>
    </Router>
  );
}

export default App;