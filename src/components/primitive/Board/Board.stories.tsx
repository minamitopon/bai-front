import type { Meta, StoryObj } from "@storybook/react"
import Board from "@/components/primitive/Board/Board"

const meta = {
  title: "Primitive/Board",
  component: Board,
  tags: ["autodocs"],
  args: {
    boardNumber: 1,
  },
} satisfies Meta<typeof Board>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DealerEast: Story = {
  args: { boardNumber: 14 },
}
