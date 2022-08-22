import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Categories from './pages/Categories'
import Tracks from './pages/Tracks'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddTrack from './pages/AddTrack'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './controller/UDLogin/getLibrary';
import Track from './pages/Track'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
    <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/:category/tracks" element={<Tracks/>} />
      <Route path="/:category/:song_id" element={<Track/>} />
      <Route path="/:category/add-track" element={<AddTrack/>} />
      </Routes>
    </Router>
    </Web3ReactProvider>
  </React.StrictMode>
)
