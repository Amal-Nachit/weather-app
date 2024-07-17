export const getWindSpeed = (windInMps) => {
  return windInMps.toFixed(1);
};

export const getVisibility = (visibilityInMeters) => {
  return (visibilityInMeters / 1000).toFixed(1);
};

export const getTime = (dateTime) => {
  const d = new Date(dateTime);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const getWeekDay = (dateString) => {
  const WEEKDAYS = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const dayIndex = new Date(dateString).getDay();
  return WEEKDAYS[dayIndex];
};

export const getWeatherDescription = (weatherCode) => {
  const WEATHER_DESCRIPTIONS_FR = {
    0: "Ciel dégagé",
    1: "Majoritairement dégagé",
    2: "Partiellement nuageux",
    3: "Couvert",
    45: "Brouillard",
    48: "Brouillard givrant",
    51: "Bruine légère",
    53: "Bruine modérée",
    55: "Bruine dense",
    56: "Bruine verglaçante légère",
    57: "Bruine verglaçante dense",
    61: "Légère pluie",
    63: "Pluie modérée",
    65: "Pluie forte",
    66: "Légère pluie verglaçante",
    67: "Pluie verglaçante forte",
    71: "Légère chute de neige",
    73: "Chute de neige modérée",
    75: "Chute de neige forte",
    77: "Grains de neige",
    80: "Légères averses de pluie",
    81: "Averses de pluie modérées",
    82: "Averses de pluie violentes",
    85: "Légères averses de neige",
    86: "Averses de neige fortes",
    95: "Orage faible à modéré",
    96: "Orage avec grêle légère",
    99: "Orage avec grêle forte",
  };

  // Fonction pour obtenir la description météorologique traduite
  return (
    WEATHER_DESCRIPTIONS_FR[weatherCode] ||
    "Description météorologique inconnue"
  );
};

export const getIcon = (weatherCode, isDay) => {
  const WEATHER_ICON_MAP = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    45: "50",
    48: "50",
    51: "10",
    53: "10",
    55: "10",
    56: "10",
    57: "10",
    61: "10",
    63: "10",
    65: "10",
    66: "10",
    67: "10",
    71: "13",
    73: "13",
    75: "13",
    77: "13",
    80: "10",
    81: "10",
    82: "10",
    85: "13",
    86: "13",
    95: "11",
    96: "11",
    99: "11",
  };

  const codeIcon = WEATHER_ICON_MAP[weatherCode] || "00";
  const timeOfDay = isDay ? "d" : "n";
  return `${codeIcon}${timeOfDay}`;
};
