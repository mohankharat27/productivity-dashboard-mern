import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div id="main">
      <Navbar />

      <section className="allElems">
        <header>
          <div className="header1">
            <h2>20 April 2025</h2>
            <h1>Saturday, 1:00 pm</h1>
            <h4>Bhopal (MP)</h4>
          </div>

          <div className="header2">
            <h2>20°C</h2>
            <h4>Light rain</h4>
            <h3 className="precipitation">Precipitation: 35%</h3>
            <h3 className="humidity">Humidity: 49%</h3>
            <h3 className="wind">Wind: 10 km/h</h3>
          </div>
        </header>

        <div className="allFeatures">
          <div className="todo elem" id="0">
            <img
              src="https://plus.unsplash.com/premium_photo-1710962184909-f9f8dc2c9f5f?q=80&w=3987&auto=format&fit=crop"
              alt=""
            />
            <h2>To Do List</h2>
          </div>

          <div className="daily elem" id="1">
            <img
              src="https://images.unsplash.com/photo-1677249490921-3246e81f19e3?q=80&w=3000&auto=format&fit=crop"
              alt=""
            />
            <h2>Daily Planner</h2>
          </div>

          <div className="moti elem" id="2">
            <img
              src="https://images.unsplash.com/photo-1678986718987-76f0b9357e0f?q=80&w=2000&auto=format&fit=crop"
              alt=""
            />
            <h2>Motivation</h2>
          </div>

          <div className="pomo elem" id="3">
            <img
              src="https://images.unsplash.com/photo-1648457259767-e3a7fea65a99?q=80&w=3000&auto=format&fit=crop"
              alt=""
            />
            <h2>Pomodoro Timer</h2>
          </div>

          <div className="goals elem" id="4">
            <img
              src="https://images.unsplash.com/photo-1718202248232-0cdbc15d29b2?q=80&w=3928&auto=format&fit=crop"
              alt=""
            />
            <h2>Daily Goals</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
