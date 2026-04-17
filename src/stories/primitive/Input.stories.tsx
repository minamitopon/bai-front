import { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/primitive/Input";
import Icon from "@/components/primitive/Icon"

const meta = {
  title: "Primitive/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    value: "",
    label: "Label",
    placeholder: "Placeholder",
    size: "md",
    icon: null,
    onChange: () => { }
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(v) => {
          setValue(v)
        }}
      />
    )
  }
}

export const WithIcon: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <Input
        {...args}
        value={value}
        onChange={(v) => {
          setValue(v)
        }}
      />
    )
  },
  args: {
    icon: <Icon name="heart" color="heart" />
  }
}