import { useState, useEffect } from "react";
import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { LoadingScreen } from "../components/LoadingScreen";
import styles from "../styles/Home.module.css";
import { getIcon, getWeatherDescription } from "../services/helpers";
import { cityConfig } from "../config.json";

export const App = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,visibility&daily=sunrise,sunset&wind_speed_unit=ms&timezone=auto&forecast_days=1`
        );

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();

    const interval = setInterval(fetchWeatherData, 3600000);

    return () => clearInterval(interval);
  }, []);

  return weatherData ? (
    <div className={styles.wrapper}>
      <MainCard
        city={cityConfig.name}
        country={cityConfig.country}
        description={getWeatherDescription(weatherData.current.weather_code)}
        iconName={getIcon(
          weatherData.current.weather_code,
          weatherData.current.is_day
        )}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} />
        </Header>
        <MetricsBox weatherData={weatherData} />
      </ContentBox>
    </div>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
