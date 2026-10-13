from fastapi import APIRouter, HTTPException

from app.services.weather_service import get_current_weather

router = APIRouter(
    prefix="/api/weather",
    tags=["Weather"]
)


@router.get("/current")
async def current_weather():
    try:
        return await get_current_weather()

    except Exception as error:
        print(f"Weather API error: {error}")

        raise HTTPException(
            status_code=502,
            detail="Unable to retrieve weather data"
        )