import { Meta, Story } from "@storybook/react/types-6-0";
import { BgContainer, BgContainerProps } from ".";

export default {
  title: "BgContainer",
  component: BgContainer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<BgContainerProps>;

export const Template: Story<BgContainerProps> = (args) => {
  return (
    <div>
      <BgContainer {...args} />
    </div>
  );
};
