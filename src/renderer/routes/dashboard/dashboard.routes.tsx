/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'renderer/components/card/card.components';
import RecentPlayed from '../../components/recentplayed/recentplayed.components';
import icon from '../../../../assets/icon.svg';
import './dashboard.style.css';

const RecentlyViewed = [
  {
    key: 1,
    imgsrc: 'https://misc.scdn.co/liked-songs/liked-songs-300.png',
    content: 'Liked Songs',
  },
  {
    key: 2,
    imgsrc: 'https://pbs.twimg.com/media/E7zJnI1VUAAA4Q7.jpg',
    content: 'Discover Weekly',
  },
  {
    key: 3,
    imgsrc:
      'https://geo-media.beatport.com/image_size/500x500/0a80304a-6f60-432f-ba9d-cf337498158c.jpg',
    content: 'Out Loud',
  },
  {
    key: 4,
    imgsrc: 'https://i.scdn.co/image/ab6761610000e5ebc1fded2a185c54df399fe63a',
    content: 'The Score',
  },
  {
    key: 5,
    imgsrc:
      'https://i.pinimg.com/originals/bb/fd/53/bbfd535c644ac8a9f44ce5b9bfc9fc29.jpg',
    content: 'One Republic',
  },
  {
    key: 6,
    imgsrc: 'https://wallpaperaccess.com/full/4341621.jpg',
    content: 'Stronger',
  },
];

const Dashboard = () => {
  const [musics, setMusics] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/all/music')
      .then((res) => setMusics(res.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="dashboard-page">
      <div className="dashboard">
        <div className="announcement">
          <img width="200px" alt="icon" src={icon} />
          <div className="ann-content">
            <h1>Another Mans Jeans</h1>
            <p>Ashe</p>
            <p>
              Another Mans Jeans, the new song from Ashe. Listen on Spotify now.
            </p>
          </div>
        </div>
        <div className="recent-accessed-body">
          {RecentlyViewed.map((data) => (
            <div>
              <RecentPlayed {...data} />
            </div>
          ))}
        </div>
      </div>
      <div className="featured-music-body">
        <h2>featuer Music Here</h2>
        <div className="music-hits">
          {musics?.map((music) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Card {...music} />
          ))}
        </div>
      </div>
      <div className="footer" />
    </div>
  );
};

export default Dashboard;
