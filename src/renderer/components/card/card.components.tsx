/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './card.styles.css';

const Card = (props: any) => {
  return (
    <div className="card-container">
      <img className="recent-music" src={props?.music_poster} alt="nice" />
      <h3>{props.music_name}</h3>
      <p>{props.artist}</p>
    </div>
  );
};

export default Card;
