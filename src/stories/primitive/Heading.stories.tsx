import Heading from "@/components/primitive/Heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Primitive/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    text: "Heading",
    level: 1,
  },
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    text: "Heading 1",
    level: 1,
  },
}

export const H2: Story = {
  args: {
    text: "Heading 2",
    level: 2,
  },
}

export const H3: Story = {
  args: {
    text: "Heading 3",
    level: 3,
  },
}

export const H4: Story = {
  args: {
    text: "Heading 4",
    level: 4,
  },
}

export const H5: Story = {
  args: {
    text: "Heading 5",
    level: 5,
  },
}

export const H6: Story = {
  args: {
    text: "Heading 6",
    level: 6,
  },
}