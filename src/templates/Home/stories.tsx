import { Meta, Story } from "@storybook/react/types-6-0";
import Home from ".";

export default {
  title: "Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Home {...args} />
    </div>
  );
};
