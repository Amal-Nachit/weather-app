import { degToCompass } from "../services/converters";
import {
  getTime,
  getVisibility,
  getWindSpeed,
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";
import { useState } from "react";

export const MetricsBox = ({ weatherData }) => {
  let date = new Date(weatherData.current.time);
  const [hours] = useState(date.getHours());

  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidité"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.current.relative_humidity_2m}
        unit={"%"}
      />
      <MetricsCard
        title={"Vitesse du vent"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(weatherData.current.wind_speed_10m)}
        unit={"m/s"}
      />

      <MetricsCard
        title={"Direction du vent"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(weatherData.current.wind_direction_10m)}
      />
      <MetricsCard
        title={"Visibilité"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(weatherData.hourly.visibility[hours])}
        unit={"km"}
      />

      <MetricsCard
        title={"Lever du soleil"}
        iconSrc={"/icons/sunrise.png"}
        metric={getTime(weatherData.daily.sunrise)}
      />
      <MetricsCard
        title={"Coucher du soleil"}
        iconSrc={"/icons/sunset.png"}
        metric={getTime(weatherData.daily.sunset)}
      />
    </div>
  );
};
