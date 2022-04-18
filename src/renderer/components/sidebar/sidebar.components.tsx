import './status.styles.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const SideBar = () => {
  return (
    <div className="status-bar">
      <ul className="nav-option">
        <li>
          <HomeIcon />
          <a href="/">Home</a>
        </li>
        <li>
          <SearchIcon />
          <a href="/search">Search</a>
        </li>
        <li>
          <LibraryMusicIcon />
          <a href="/mylibrary">Your Library</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
