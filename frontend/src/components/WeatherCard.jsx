function WeatherCard({ weather, loading, error }) {
  if (loading) {
    return (
      <section className="card">
        <h3>Current Weather</h3>
        <p>Loading weather data...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="card">
        <h3>Current Weather</h3>
        <p className="error-message">{error}</p>
      </section>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <section className="card">
      <h3>Current Weather</h3>
      <p className="location">{weather.city}</p>

      <div className="temperature">
        {weather.temperature ?? "N/A"}°C
      </div>

      <div className="weather-details">
        <p>
          <span>Humidity</span>
          <strong>{weather.humidity ?? "N/A"}%</strong>
        </p>

        <p>
          <span>Feels Like</span>
          <strong>{weather.feels_like ?? "N/A"}°C</strong>
        </p>

        <p>
          <span>Precipitation</span>
          <strong>{weather.precipitation ?? "N/A"} mm</strong>
        </p>

        <p>
          <span>Wind Speed</span>
          <strong>{weather.wind_speed ?? "N/A"} km/h</strong>
        </p>
      </div>

      <p className="updated-time">
        Data timestamp: {weather.time ?? "Unavailable"}
      </p>
    </section>
  );
}

export default WeatherCard;