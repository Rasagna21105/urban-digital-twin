import os

from dotenv import load_dotenv

load_dotenv()

APP_NAME = "AI-Powered Urban Digital Twin"
APP_VERSION = "0.1.0"

# Hyderabad coordinates
CITY_NAME = "Hyderabad"
CITY_LATITUDE = 17.3850
CITY_LONGITUDE = 78.4867

FRONTEND_URL = os.getenv(
    "FRONTEND_URL",
    "http://localhost:5173"
)