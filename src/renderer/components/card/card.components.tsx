/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './card.styles.css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const Card = (props: any) => {
  return (
    <div className="card-container">
      <img className="recent-music" src={props?.music_poster} alt="nice" />
      <br />
      <PlayCircleFilledWhiteIcon className="play-btn-icon" fontSize="large" />
      <div className="card-content">
        <h3>{props.music_name}</h3>
        <p>{props.artist}</p>
      </div>
    </div>
  );
};

export default Card;
