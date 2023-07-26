import './App.css'
import React from 'react'
import { action, originals, comedy, romantic } from './urls';
import NavBar from './components/navBar/navBar';
import Banner from './components/Banner/banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title = 'Netflix originals'/>
        <RowPost url={action} title = 'Action' isSmall/>
        <RowPost url={comedy} title = 'Comedy' isSmall/>
        <RowPost url={romantic} title = 'Romantic' isSmall/>
    </div>
  );
}

export default App;