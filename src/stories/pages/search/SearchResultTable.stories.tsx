import type { Meta, StoryObj } from "@storybook/react"
import SearchResultTable from "@/components/pages/search/SearchResultTable"

const meta = {
  title: "Pages/Search/SearchResultTable",
  component: SearchResultTable,
  tags: ["autodocs"],
  args: {
    results: [
      {
        match: {
          id: 1,
          uuid: "f14d9806-6af9-4ad3-84c8-7f204c14cf96",
          name: "Mixed National Camp 2026",
          date: "xxxx-xx-xx",
          team_open: "Team 1",
          team_close: "Team 2",
        },
        match_progress: {
          id: 1,
          uuid: "f14d9806-6af9-4ad3-84c8-7f204c14cf96",
          round: "Final RR 3_14",
          start_board: 17,
          last_board: 32,
          imp_open: 0,
          imp_close: 0,
        },
        players: {
          id: 1,
          uuid: "f14d9806-6af9-4ad3-84c8-7f204c14cf96",
          north_open: "Satyab",
          east_open: "HImani",
          south_open: "Kiran",
          west_open: "Rajeev",
          north_close: "PRIYARANJA",
          east_close: "KAMNA",
          south_close: "BINDIYA N",
          west_close: "ABHIJIT",
        },
        board_number: 16,
      },
    ]
  }
} satisfies Meta<typeof SearchResultTable>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}