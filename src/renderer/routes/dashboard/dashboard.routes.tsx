import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'renderer/components/card/card.components';
import RecentPlayed from '../../components/recentplayed/recentplayed.components';
import icon from '../../../../assets/icon.svg';
import './dashboard.style.css';

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
          {[...Array(6)].map((key) => (
            <div key={key}>
              <RecentPlayed />
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
