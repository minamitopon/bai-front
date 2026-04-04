import type { Meta, StoryObj } from "@storybook/react"
import Icon from "@/components/primitive/Icon"

const meta = {
  title: "Primitive/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    size: "m",
    name: "filter",
    color: "spade",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m", "l", "unlimited"],
    },
    name: {
      control: "text",
    },
    color: {
      control: "select",
      options: ["spade", "heart", "diamond", "club", "white"],
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Filter: Story = {
  args: {
    name: "filter",
  },
}