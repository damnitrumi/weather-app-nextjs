import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { DetailedData, DetailedDataProps } from ".";

const props: DetailedDataProps = {
  maxTemp: 1,
  minTemp: 2,
  cloudiness: 3,
  humidity: 4,
  windSpeed: 5,
};

describe("<DetailedData />", () => {
  it("should render DetailedData and its children", () => {
    renderTheme(<DetailedData {...props} />);

    expect(
      screen.getByRole("heading", { name: "Weather Details:" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Max Temperature")).toBeInTheDocument();
    expect(screen.getByText("Min Temperature")).toBeInTheDocument();
    expect(screen.getByText("Cloudiness")).toBeInTheDocument();
    expect(screen.getByText("Humidity")).toBeInTheDocument();
    expect(screen.getByText("Wind")).toBeInTheDocument();

    expect(screen.getByText("1°")).toBeInTheDocument();
    expect(screen.getByText("2°")).toBeInTheDocument();
    expect(screen.getByText("3%")).toBeInTheDocument();
    expect(screen.getByText("4%")).toBeInTheDocument();
    expect(screen.getByText("5km/h")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<DetailedData {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
