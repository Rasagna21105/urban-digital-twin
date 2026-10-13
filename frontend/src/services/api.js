import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 20000,
});

export async function getCurrentWeather() {
  const response = await api.get("/api/weather/current");
  return response.data;
}

export async function checkBackendHealth() {
  const response = await api.get("/health");
  return response.data;
}

export default api;