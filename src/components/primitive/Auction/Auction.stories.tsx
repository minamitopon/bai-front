import type { Meta, StoryObj } from "@storybook/react"
import Auction from "@/components/primitive/Auction/Auction"
import { SUIT, CALL_OPTION } from "@/types/components/enum"

const meta = {
  title: "Primitive/Auction",
  component: Auction,
  tags: ["autodocs"],
  args: {
    auction: []
  }
} satisfies Meta<typeof Auction>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}

export const InAuction: Story = {
  render: (args) => <div style={{ width: "160px" }}><Auction auction={args.auction} /></div>,
  args: {
    auction: [
      { id: -1, rank: 0, suit: CALL_OPTION.PASS },
      { id: 0, rank: 1, suit: SUIT.HEART },
      { id: -1, rank: 0, suit: CALL_OPTION.PASS },
      { id: 4, rank: 1, suit: SUIT.NOTRUMP },
      { id: 5, rank: 2, suit: SUIT.CLUB },
      { id: -2, rank: 0, suit: CALL_OPTION.DOUBLE },
      { id: 8, rank: 2, suit: SUIT.SPADE },
      { id: 12, rank: 3, suit: SUIT.HEART },
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
