import type { Meta, StoryObj } from "@storybook/react-vite"
import SuitValue from "@/components/primitive/SuitValue/SuitValue"

const meta = {
  title: "Primitive/SuitValue",
  component: SuitValue,
  tags: ["autodocs"],
  args: {
    suit: "s",
    value: "A",
    type: "card",
  },
  argTypes: {
    suit: {
      control: "select",
      options: ["s", "h", "d", "c", "n"],
    },
    type: {
      control: "radio",
      options: ["card", "contract"],
    },
  },
} satisfies Meta<typeof SuitValue>

export default meta

type Story = StoryObj<typeof meta>

export const Card: Story = {}

export const Contract: Story = {
  args: {
    suit: "n",
    value: "3",
    type: "contract",
  },
}
