import { Meta, StoryObj } from "@storybook/react";

import Container from "../components/ui/Container";

const meta: Meta<typeof Container> = {
  component: Container,
  title: "Container",
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
    gap: {
      options: ["default", "small"],
      control: { type: "radio" },
    },
    align: {
      options: ["start", "center"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    direction: "row",
    gap: "default",
    align: "start",
  },
  render: ({ align, direction, gap }) => (
    <Container align={align} direction={direction} gap={gap}>
      <div
        style={{ width: "128px", height: "128px", backgroundColor: "#2B6CB0" }}
      ></div>
      <div
        style={{ width: "128px", height: "128px", backgroundColor: "#2B6CB0" }}
      ></div>
      <div
        style={{ width: "128px", height: "128px", backgroundColor: "#2B6CB0" }}
      ></div>
    </Container>
  ),
};
