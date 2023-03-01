import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { BgContainer, BgContainerProps } from ".";

const props: BgContainerProps = {
  bgSelection: "clear",
  children: <h1>Oi</h1>,
};

describe("<BgContainer />", () => {
  it("should render bg container and its children", () => {
    renderTheme(<BgContainer {...props} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveStyle(
      "background-image: url(/assets/images/clear.jpg)",
    );
    expect(screen.getByRole("heading", { name: "Oi" })).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    renderTheme(<BgContainer {...props} />);
    expect(screen.getByRole("article")).toMatchSnapshot();
  });
});
