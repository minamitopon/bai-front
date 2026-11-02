import type { Meta, StoryObj } from "@storybook/react"
import Hand from "@/components/primitive/Hand/Hand"

const meta = {
  title: "Primitive/Hand",
  component: Hand,
  tags: ["autodocs"],
  args: {
    hand: { spade: "AK863", heart: "KQxx", diamond: "xxx", club: "Ax" },
  },
} satisfies Meta<typeof Hand>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Void: Story = {
  args: {
    hand: { spade: "AKQJT9876543", heart: "A", diamond: "", club: "" },
  },
}
