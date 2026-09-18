import { Input as ChakraInput, InputGroup, Field } from "@chakra-ui/react"
import styles from "@/components/primitive/Input/input.module.sass"

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
    <Field.Root css={{ gap: "4px" }}>
      <Field.Label css={{ color: "#64748B" }}>{label}</Field.Label>
      <InputGroup startElement={icon}>
        <ChakraInput
          value={value}
          placeholder={placeholder}
          size={size}
          className={`${styles.input} ${icon ? styles['input--with-icon'] : ''}`}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputGroup>
    </Field.Root>
  )
}

export default Input