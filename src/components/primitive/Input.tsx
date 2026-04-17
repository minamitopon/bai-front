import { Input as ChakraInput, InputGroup, Field } from "@chakra-ui/react"

interface Props {
  value: string
  label?: string
  placeholder?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  onChange: (value: string) => void
}

const Input = (props: Props) => {
  const { value, label, placeholder, size = 'md', icon = null, onChange } = props
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <InputGroup startElement={icon}>
        <ChakraInput
          value={value}
          placeholder={placeholder}
          size={size}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputGroup>
    </Field.Root>
  )
}

export default Input