import * as Styled from "./styles";

export type DetailedDataProps = {
  maxTemp: number;
  minTemp: number;
  cloudiness: number;
  humidity: number;
  windSpeed: number;
};

export const DetailedData = ({
  maxTemp,
  minTemp,
  cloudiness,
  humidity,
  windSpeed,
}: DetailedDataProps) => {
  return (
    <Styled.Wrapper>
      <h1 className="text-white font-bold mb-8 text-[1.8rem] lg:text-[2.4rem]">
        Weather Details:
      </h1>
      <ul className="list-none flex flex-col gap-1">
        <li className="flex justify-between text-gray-300">
          <span className="text-[1.4rem] lg:text-[1.6rem]">
            Max Temperature
          </span>
          <span className="text-white text-[1.4rem] lg:text-[1.6rem]">
            {maxTemp}°
          </span>
        </li>
        <li className="flex justify-between text-gray-300">
          <span className="text-[1.4rem] lg:text-[1.6rem]">
            Min Temperature
          </span>
          <span className="text-white text-[1.4rem] lg:text-[1.6rem]">
            {minTemp}°
          </span>
        </li>
        <li className="flex justify-between text-gray-300">
          <span className="text-[1.4rem] lg:text-[1.6rem]">Cloudiness</span>
          <span className="text-white text-[1.4rem] lg:text-[1.6rem]">
            {cloudiness}%
          </span>
        </li>
        <li className="flex justify-between text-gray-300">
          <span className="text-[1.4rem] lg:text-[1.6rem]">Humidity</span>
          <span className="text-white text-[1.4rem] lg:text-[1.6rem]">
            {humidity}%
          </span>
        </li>
        <li className="flex justify-between text-gray-300">
          <span className="text-[1.4rem] lg:text-[1.6rem]">Wind</span>
          <span className="text-white text-[1.4rem] lg:text-[1.6rem]">
            {windSpeed}km/h
          </span>
        </li>
      </ul>
    </Styled.Wrapper>
  );
};
