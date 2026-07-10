import type { Meta, StoryObj } from "@storybook/react"
import Button from "@/components/primitive/Button/Button"

const meta = {
  title: "Primitive/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    size: "m",
    disabled: false,
    waiting: false,
    onClick: () => { alert('clicked') },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["spade", "heart", "diamond", "club"],
    },
    size: {
      control: "select",
      options: ["s", "m", "l", "unlimited"],
    },
    disabled: {
      control: "boolean",
    },
    waiting: {
      control: "boolean",
    },
    onClick: {
      action: "onClick",
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Spade: Story = {
  args: {
    label: "Spade",
    color: "spade"
  },
}

export const Heart: Story = {
  args: {
    label: "Heart",
    color: "heart"
  },
}

export const Diamond: Story = {
  args: {
    label: "Diamond",
    color: "diamond"
  },
}

export const Club: Story = {
  args: {
    label: "Club",
    color: "club"
  },
}

export const NonLabel: Story = {
  args: {
    color: "white",
    size: "m",
    icon: "filter"
  },
}

export const LabelAndIcon: Story = {
  args: {
    label: "Label and Icon",
    icon: "filter",
  }
}