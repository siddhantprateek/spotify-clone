import './status.styles.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import LikeMusic from '../../../../assets/like-music-icon.png';

const SideBar = () => {
  return (
    <div className="status-bar">
      <ul className="nav-option">
        <li>
          <HomeIcon />
          <p>Home</p>
        </li>
        <li>
          <SearchIcon />
          <p>Search</p>
        </li>
        <li>
          <LibraryMusicIcon />
          <p>Your Library</p>
        </li>
        <br />
        <li>
          <AddBoxIcon />
          <p>Create Playlist</p>
        </li>
        <li>
          <img className="side-icons" src={LikeMusic} alt="" />
          <p>Liked Songs</p>
        </li>
        <li>
          <PodcastsIcon />
          <p>Your Episodes</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
