import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/sidebar.components';
import { Dashboard, Library, Search } from './routes';
import Player from './components/player/player.components';

export default function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Router>
      <Player />
    </div>
  );
}
