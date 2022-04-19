import './status.styles.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LikeMusic from '../../../../assets/like-music-icon.png';

const SideBar = () => {
  return (
    <div className="status-bar">
      <ul className="nav-option">
        <li>
          <HomeIcon />
          Home
        </li>
        <li>
          <SearchIcon />
          Search
        </li>
        <li>
          <LibraryMusicIcon />
          Your Library
        </li>
        <li>
          <img className="side-icons" src={LikeMusic} alt="" />
          Liked Songs
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
