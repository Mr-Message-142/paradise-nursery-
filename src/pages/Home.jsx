import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful plants and create your own
            green paradise.
          </p>

          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;