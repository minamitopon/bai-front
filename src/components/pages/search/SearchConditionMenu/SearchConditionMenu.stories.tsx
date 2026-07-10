import type { Meta, StoryObj } from "@storybook/react"
import SearchConditionMenu from "@/components/pages/search/SearchConditionMenu/SearchConditionMenu"

const meta = {
  title: "Pages/Search/SearchConditionMenu",
  component: SearchConditionMenu,
  tags: ["autodocs"],
  args: {
    action: () => { /* NOP */ }
  }
} satisfies Meta<typeof SearchConditionMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}