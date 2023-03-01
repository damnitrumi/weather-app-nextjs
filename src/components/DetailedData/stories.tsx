import { Meta, Story } from "@storybook/react/types-6-0";
import { DetailedData, DetailedDataProps } from ".";

export default {
  title: "DetailedData",
  component: DetailedData,
} as Meta<DetailedDataProps>;

export const Template: Story<DetailedDataProps> = (args) => {
  return (
    <div>
      <DetailedData {...args} />
    </div>
  );
};
