import type { Meta, StoryObj } from "@storybook/react-vite"
import BoardHands from "@/components/pages/board/BoardHands/BoardHands"

const meta = {
  title: "Pages/Board/BoardHands",
  component: BoardHands,
  tags: ["autodocs"],
  args: {
    hands: [
      { spade: "AKJ104", heart: "852", diamond: "Q9", club: "K73" },
      { spade: "Q83", heart: "KQJ", diamond: "A1073", club: "J84" },
      { spade: "765", heart: "A10974", diamond: "K8", club: "Q52" },
      { spade: "92", heart: "63", diamond: "J6542", club: "A1096" },
    ],
  },
} satisfies Meta<typeof BoardHands>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
