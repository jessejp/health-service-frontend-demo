import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "../components/ui/Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    heading: "Accordion Heading",
    children: "Accordion body text is passed to the component as children.",
  },
  render: ({ heading, children }) => (
    <Accordion heading={heading}>
      {children}
    </Accordion>
  ),
};
