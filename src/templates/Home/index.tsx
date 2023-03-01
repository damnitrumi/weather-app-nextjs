import { BgContainer } from "components/BgContainer";
import { DetailedData } from "components/DetailedData";
import { MainData } from "components/MainData";
import { Loading } from "components/Loading";
import { useEffect, useState } from "react";

type FetchResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: "BR";
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    alert(
      "Permita o navegador obter a sua localização / Allow browser to get your location",
    );

    fetchingWeather();
  }, []);

  const fetchingWeather = async () => {
    const fetchCoordinates: { lat: number; lon: number } = await new Promise(
      (res) => {
        navigator.geolocation.getCurrentPosition((pos) => {
          res({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        });
      },
    );

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${fetchCoordinates.lat}&lon=${fetchCoordinates.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

    const rawData = await fetch(url);
    const weatherJson: FetchResponse = await rawData.json();

    const {
      clouds: { all: cloudiness },
      dt: date,
      main: { temp, temp_min, temp_max, humidity },
      name: city,
      weather,
      wind: { speed: wind },
    } = weatherJson;

    const [firstWeatherElement] = weather;

    const { main: localWeather, icon } = firstWeatherElement;
    setWeather({
      cloudiness,
      date,
      temp,
      temp_min,
      temp_max,
      humidity,
      city,
      localWeather,
      wind,
      icon,
    });
  };

  if (!weather) return <Loading />;

  const {
    cloudiness,
    date,
    temp,
    temp_min,
    temp_max,
    humidity,
    city,
    localWeather,
    wind,
    icon,
  } = weather;

  let bgSelection;

  switch (localWeather.toLowerCase()) {
    case "clear":
      bgSelection = localWeather.toLowerCase();
      break;
    case "clouds":
      bgSelection = localWeather.toLowerCase();
      break;
    case "drizzle":
      bgSelection = localWeather.toLowerCase();
      break;
    case "rain":
      bgSelection = localWeather.toLowerCase();
      break;
    case "snow":
      bgSelection = localWeather.toLowerCase();
      break;
    case "thunderstorm":
      bgSelection = localWeather.toLowerCase();
      break;
    case "tornado":
      bgSelection = localWeather.toLowerCase();
      break;

    default:
      bgSelection = "mist";
      break;
  }

  const convertedTemp = Number((temp - 273.15).toFixed(0));
  const localDate = new Date(date * 1000);

  const time = localDate.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const weekDay =
    localDate
      .toLocaleString("default", { weekday: "long" })
      .charAt(0)
      .toUpperCase() +
    localDate.toLocaleString("default", { weekday: "long" }).substring(1);

  const monthDay = localDate.toLocaleString("default", { day: "numeric" });

  const month =
    localDate
      .toLocaleString("default", { month: "short" })
      .charAt(0)
      .toUpperCase() +
    localDate.toLocaleString("default", { month: "short" }).substring(1);

  const year = localDate.toLocaleString("default", { year: "2-digit" });

  const maxTemp = Math.ceil(temp_max - 273.15);
  const minTemp = Math.ceil(temp_min - 273.15);

  return (
    <div className=" flex items-center h-screen md:p-5">
      <BgContainer bgSelection={bgSelection}>
        <MainData
          temp={convertedTemp}
          city={city}
          time={time}
          weekDay={weekDay}
          monthDay={monthDay}
          month={month}
          year={year}
          weather={localWeather}
          icon={icon}
        />
        <DetailedData
          cloudiness={cloudiness}
          humidity={humidity}
          maxTemp={maxTemp}
          minTemp={minTemp}
          windSpeed={wind}
        />
      </BgContainer>
    </div>
  );
}

export default Home;
