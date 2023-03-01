import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { MainData, MainDataProps } from ".";

const props: MainDataProps = {
  temp: 1,
  city: "City Name",
  time: "10:20",
  weekDay: "Friday",
  monthDay: "24",
  month: "Feb",
  year: "23",
  weather: "Rain",
  icon: "any",
};

describe("<MainData />", () => {
  it("should render elements with correct data", () => {
    renderTheme(<MainData {...props} />);

    expect(screen.getByText(`${props.temp}°`)).toBeInTheDocument();
    expect(screen.getByText(`${props.city}`)).toBeInTheDocument();
    expect(screen.getByText(`${props.weather}`)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${props.time} - ${props.weekDay}, ${props.monthDay} ${props.month} '${props.year}`,
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      `http://openweathermap.org/img/w/${props.icon}.png`,
    );
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<MainData {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
