import type { Meta, StoryObj } from "@storybook/react"
import Bidding from "@/components/primitive/Bidding"
import type { Call } from "@/types/components";
import { SUIT, CALL_OPTION } from "@/types/components/enum"

const meta = {
  title: "Primitive/Bidding",
  component: Bidding,
  tags: ["autodocs"],
  args: {
    auction: [],
    onClick: (v: Call) => { console.log(v) },
    undo: () => { console.log("undo") }
  }
} satisfies Meta<typeof Bidding>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

export const InAuction: Story = {
  args: {
    auction: [
      { id: 0, rank: 1, suit: SUIT.HEART },
      { id: 4, rank: 1, suit: SUIT.NOTRUMP },
      { id: 10, rank: 3, suit: SUIT.CLUB }
    ]
  }
}

export const Redoubleable: Story = {
  args: {
    auction: [
      { id: 0, rank: 1, suit: SUIT.HEART },
      { id: 4, rank: 1, suit: SUIT.NOTRUMP },
      { id: 10, rank: 3, suit: SUIT.CLUB },
      { id: -2, rank: 0, suit: CALL_OPTION.DOUBLE }
    ]
  }
}