import type { Meta, StoryObj } from "@storybook/react";
import Container from "@/components/primitive/Container/Container";

const meta = {
  title: "Primitive/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    children: "Container",
    space: "m",
  },
  argTypes: {
    space: {
      control: "select",
      options: ["xs", "s", "m", "l", "xl"],
    },
  },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Container",
    space: "m",
  },
}