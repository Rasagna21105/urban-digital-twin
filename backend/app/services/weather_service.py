import httpx

from app.config import (
    CITY_NAME,
    CITY_LATITUDE,
    CITY_LONGITUDE
)

WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast"


async def get_current_weather():
    params = {
        "latitude": CITY_LATITUDE,
        "longitude": CITY_LONGITUDE,
        "current": (
            "temperature_2m,"
            "relative_humidity_2m,"
            "apparent_temperature,"
            "precipitation,"
            "wind_speed_10m"
        ),
        "timezone": "Asia/Kolkata"
    }

    async with httpx.AsyncClient(timeout=15.0) as client:
        response = await client.get(
            WEATHER_API_URL,
            params=params
        )
        response.raise_for_status()
        data = response.json()

    current = data.get("current")

    if not current:
        raise ValueError("Current weather data is unavailable")

    return {
        "city": CITY_NAME,
        "latitude": CITY_LATITUDE,
        "longitude": CITY_LONGITUDE,
        "time": current.get("time"),
        "temperature": current.get("temperature_2m"),
        "humidity": current.get("relative_humidity_2m"),
        "feels_like": current.get("apparent_temperature"),
        "precipitation": current.get("precipitation"),
        "wind_speed": current.get("wind_speed_10m"),
        "temperature_unit": "°C",
        "wind_speed_unit": "km/h"
    }