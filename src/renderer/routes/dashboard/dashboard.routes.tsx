import icon from '../../../../assets/icon.svg';
import './dashboard.style.css';
import RecentPlayed from '../../components/recentplayed/recentplayed.components';

const Dashboard = () => {
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
      </div>
    </div>
  );
};

export default Dashboard;
