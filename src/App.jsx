import { useState, useEffect } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import StudyCase from './pages/Work/StudyCase'
import nightMode from './assets/nightMode';
import { createContext } from 'react';

function App() {
  const [nM, setNM] = useState(false);
  const body = document.querySelector('body');

  return (
    <>
      <nightMode.Provider value={{nM, toggleNM:() => {setNM(!nM), body.classList.toggle('nightMode'), body.classList.toggle('dayMode')}}}>
        <BrowserRouter>
          <main >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Work />} />
              <Route path="/works/:works" element={<StudyCase />} />
            </Routes>
          </main>
        </BrowserRouter>
      </nightMode.Provider>
    </>
  )
}

export default App
