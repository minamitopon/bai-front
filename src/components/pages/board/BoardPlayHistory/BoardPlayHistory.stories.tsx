import type { Meta, StoryObj } from "@storybook/react-vite"
import BoardPlayHistory from "@/components/pages/board/BoardPlayHistory/BoardPlayHistory"

const meta = {
  title: "Pages/Board/BoardPlayHistory",
  component: BoardPlayHistory,
  tags: ["autodocs"],
  args: {
    playLogs: [{ room: "o", play: [
        ["hJ", "h2", "h4", "hA"],
        ["sK", "s4", "s3", "sA"],
        ["c9", "cA", "c3", "c2"],
        ["s9", "s8", "s2", "s7"],
        ["s5", "c6", "sJ", "s6"],
        ["hK", "h6", "c5", "h9"],
        ["hQ", "h7", "cJ", "hT"],
        ["d5", "d9", "dJ", "dK"],
        ["cK", "cQ", "c4", "sT"],
        ["sQ", "cT", "h3", "c7"],
        ["d2", "d4", "dQ", "d3"],
        ["d6", "dT", "dA", "d7"],
        ["d8", "c8", "h5", "h8"],
      ] }],
  },
} satisfies Meta<typeof BoardPlayHistory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Claimed: Story = {
  args: {
    playLogs: [{ room: "o", play: [
        ["hJ", "h2", "h4", "hA"],
        ["sK", "s4", "s3", "sA"],
        ["c9", "cA", "c3", "c2"],
        ["s9", "s8", "s2", "s7"],
        ["s5", "c6", "sJ", "s6"],
        ["hK", "h6", "c5", "h9"],
        ["hQ", "h7", "cJ", "hT"],
        ["d5"],
      ] }],
  }
}
