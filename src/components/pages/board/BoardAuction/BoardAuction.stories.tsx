import type { Meta, StoryObj } from "@storybook/react-vite"
import BoardAuction from "@/components/pages/board/BoardAuction/BoardAuction"

const meta = {
  title: "Pages/Board/BoardAuction",
  component: BoardAuction,
  tags: ["autodocs"],
  args: {
    boardNumber: 2,
    auction: "2D! p 2N! p 3C! p 3D! d 3S! p 4H p p p",
  },
} satisfies Meta<typeof BoardAuction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
