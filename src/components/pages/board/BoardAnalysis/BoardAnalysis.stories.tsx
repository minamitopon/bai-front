import type { Meta, StoryObj } from "@storybook/react-vite"
import BoardAnalysis from "@/components/pages/board/BoardAnalysis/BoardAnalysis"

const meta = {
  title: "Pages/Board/BoardAnalysis",
  component: BoardAnalysis,
  tags: ["autodocs"],
  args: {
    hands: [
      { spade: "J98654", heart: "J", diamond: "AJ942", club: "3" },
      { spade: "AQ2", heart: "AK8", diamond: "Q87", club: "JT98" },
      { spade: "K3", heart: "Q643", diamond: "T3", club: "AK542" },
      { spade: "T7", heart: "T9752", diamond: "K65", club: "Q76" },
    ],
  },
} satisfies Meta<typeof BoardAnalysis>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
