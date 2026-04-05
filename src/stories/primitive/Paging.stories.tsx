import type { Meta, StoryObj } from "@storybook/react"
import Paging from "@/components/primitive/Paging"

const meta = {
  title: "Primitive/Paging",
  component: Paging,
  tags: ["autodocs"],
  args: {
    current: 1,
    last: 10,
    total: 100,
    pageUp: () => {},
    pageDown: () => {},
    jumpToPage: () => {},
  },
  argTypes: {
    current: {
      control: "number",
    },
    last: {
      control: "number",
    },
    total: {
      control: "number",
    },
  },
} satisfies Meta<typeof Paging>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    current: 1,
    last: 10,
    total: 100,
  },
}