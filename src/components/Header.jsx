function Header() {
  return (
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
  );
}

export default Header;
