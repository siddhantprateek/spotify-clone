import './player.styles.css';
import { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RefreshIcon from '@mui/icons-material/Refresh';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Slider from '@mui/material/Slider';
import MicIcon from '@mui/icons-material/Mic';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DevicesIcon from '@mui/icons-material/Devices';
import { IconButton } from '@mui/material';

const Player = () => {
  const [play, setPlay] = useState(true);
  return (
    <div className="player-bar">
      <div className="left-actions actions">
        <img
          className="music-poster"
          src="https://upload.wikimedia.org/wikipedia/en/6/66/Bea_Miller_-_aurora.jpeg"
          alt="banner"
        />
        <div className="music-title">
          <h3>Like That</h3>
          <p>Bea Miller</p>
        </div>
      </div>
      <div className="center-actions actions">
        <IconButton>
          <ShuffleIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <SkipPreviousIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => setPlay(!play)}>
          {play ? (
            <PlayCircleFilledWhiteIcon fontSize="large" className="play-btn" />
          ) : (
            <PauseCircleFilledIcon fontSize="large" className="play-btn" />
          )}
        </IconButton>
        <IconButton>
          <SkipNextIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="right-actions actions">
        <IconButton>
          <MicIcon className="mic" fontSize="small" />
        </IconButton>
        <IconButton>
          <PlaylistAddIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <DevicesIcon fontSize="small" />
        </IconButton>
        <div className="volume-section">
          <Slider
            valueLabelDisplay="auto"
            size="small"
            sx={{
              color: '#9E9E9E',
            }}
            aria-label=""
            defaultValue={40}
            className="volume"
          />
        </div>
        <IconButton>
          <UnfoldMoreIcon className="expand" />
        </IconButton>
      </div>
    </div>
  );
};

export default Player;
