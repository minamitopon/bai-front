import type { Meta, StoryObj } from "@storybook/react"
import Img from "@/components/primitive/Img/Img"

const meta = {
  title: "Primitive/Img",
  component: Img,
  tags: ["autodocs"],
  args: {
    src: "@/assets/images/logo.png",
    alt: "Logo",
  },
  argTypes: {
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
  },
} satisfies Meta<typeof Img>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
}