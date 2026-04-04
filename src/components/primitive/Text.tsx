import { useMemo } from "react"
import type { Size, Color, Weight } from "@/types/components"
import generateClassName from "@/functions/components/generateClassName"
import styles from "@/styles/components/primitive/text.module.sass"

interface Props {
  text: string
  size?: Size
  weight?: Weight,
  color?: Color
}

const Text = (props: Props) => {
  const { text, size, weight, color } = props
  const modifireClassObject = useMemo(() => ({
    [styles[`text`]]: true,
    [styles[`text--font-color-${color}`]]: !!color,
    [styles[`text--font-size-${size}`]]: !!size,
    [styles[`text--font-weight-${weight}`]]: !!weight,
  }), [size, weight, color])

  return (
    <p className={generateClassName(modifireClassObject)}>{text}</p>
  )
}

export default Text