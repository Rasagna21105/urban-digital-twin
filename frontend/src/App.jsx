import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import MapView from "./components/MapView";

import { getCurrentWeather } from "./services/api";

import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true);
        setError("");

        const data = await getCurrentWeather();
        setWeather(data);
      } catch (err) {
        console.error("Unable to load weather:", err);

        setError(
          "Could not load weather data. Check whether the backend is running."
        );
      } finally {
        setLoading(false);
      }
    }

    loadWeather();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main className="dashboard">
        <section className="welcome-section">
          <h1>Smart City Dashboard</h1>

          <p>
            Monitor urban conditions and explore geographic
            information for Hyderabad.
          </p>
        </section>

        <section className="dashboard-grid">
          <WeatherCard
            weather={weather}
            loading={loading}
            error={error}
          />

          <section className="card feature-card">
            <h3>Traffic Monitoring</h3>
            <p className="feature-status">Integration pending</p>
            <p>
              Traffic speed and congestion information will
              appear here after connecting the traffic API.
            </p>
          </section>

          <section className="card feature-card">
            <h3>Air Quality</h3>
            <p className="feature-status">Integration pending</p>
            <p>
              Pollutant measurements will be displayed after
              connecting the air-quality data source.
            </p>
          </section>

          <section className="card feature-card">
            <h3>Healthcare Accessibility</h3>
            <p className="feature-status">Integration pending</p>
            <p>
              Nearby hospitals and clinics will be shown after
              integrating OpenStreetMap facility data.
            </p>
          </section>
        </section>

        <MapView />

        <footer className="dashboard-footer">
          AI-Powered Urban Digital Twin — Development Version
        </footer>
      </main>
    </div>
  );
}

export default App;