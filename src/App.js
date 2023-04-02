import React, { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/Error';
import './App.css';
import Location from './components/Location';
import Episode from './components/Episode';
import './components/style/main.scss'
function App() {
  return (
    <div className="App">
      <header>
        <div className='header container'>
          <h1>The Rick and Morty</h1>
          <div className='link'>
          <p><Link to='home'>Home</Link></p>
          <p><Link to='location'>Location</Link></p>
          <p><Link to='episode'>Episode</Link></p>
          </div>

        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/location' element={<Location />} />
          <Route path='/episode' element={<Episode />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </main>



    </div>
  );
}

export default App;
