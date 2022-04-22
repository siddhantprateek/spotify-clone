/* eslint-disable react/destructuring-assignment */
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import './recentplayed.styles.css';

const RecentPlayed = (props: any) => {
  return (
    <div className="recently-played">
      <>
        <img src={props.imgsrc} alt="" className="icon" />
        <div className="recent-container-content">
          <p>{props.content}</p>
        </div>
      </>
      <PlayCircleFilledWhiteIcon className="play-btn-recent" fontSize="large" />
    </div>
  );
};

export default RecentPlayed;
