import type { Meta, StoryObj } from "@storybook/react"
import Text from "@/components/primitive/Text"

const meta = {
  title: "Primitive/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    text: "Text",
    size: "m",
    weight: "normal"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m", "l", "unlimited"],
    },
    weight: {
      control: "select",
      options: ["normal", "bold"],
    },
    color: {
      control: "select",
      options: ["spade", "heart", "diamond", "club", "white"],
    },
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "Text",
  },
}