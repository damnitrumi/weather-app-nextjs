export type MainDataProps = {
  temp: number;
  city: string;
  time: string;
  weekDay: string;
  monthDay: string;
  month: string;
  year: string;
  weather: string;
  icon: string;
};

export const MainData = ({
  temp,
  city,
  time,
  weekDay,
  monthDay,
  month,
  year,
  weather,
  icon,
}: MainDataProps) => {
  return (
    <section className="text-white px-4 py-32 flex items-end grow md:px-16 lg:px-24 lg:py-56">
      <div className="flex gap-5 items-end">
        <p className=" text-[5.0rem] font-bold leading-none min-[500px]:text-[8.4rem]">
          {temp}°
        </p>
        <div className="flex flex-col gap-2">
          <p className=" text-3xl font-medium min-[500px]:text-6xl">{city}</p>
          <p className="text-lg pl-1 min-[500px]:text-[1.6rem]">
            {time} - {weekDay}, {monthDay} {month} &apos;{year}
          </p>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="Weather Icon"
          />
          <p className="text-lg min-[500px]:text-[1.6rem]">{weather}</p>
        </div>
      </div>
    </section>
  );
};
