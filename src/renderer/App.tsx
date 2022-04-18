import { MemoryRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/sidebar.components';
import Dashboard from './routes/dashboard/dashboard.routes';
import Player from './components/player/player.components';
// import Library from './routes/library/library.routes';
// import Search from './routes/search/search.routes';

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/" element={<Search />} />
          <Route path="/" element={<Library />} /> */}
        </Routes>
      </Router>
      <Player />
    </div>
  );
}
