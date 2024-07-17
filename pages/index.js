import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { LoadingScreen } from "../components/LoadingScreen";
import styles from "../styles/Home.module.css";
import { getIcon, getWeatherDescription } from "../services/helpers";
import { cityConfig } from "../config.json";
import { useWeatherData } from "./api/data.js";

export const App = () => {
  const { weatherData } = useWeatherData();

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
