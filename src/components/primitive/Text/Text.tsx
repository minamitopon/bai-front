import { useMemo } from "react"
import type { Size, Color, Weight, Align } from "@/types/components"
import generateClassName from "@/functions/components/generateClassName"
import styles from "@/components/primitive/Text/text.module.sass"

interface Props {
  text: string
  size?: Size
  weight?: Weight,
  color?: Color,
  align?: Align
}

const Text = (props: Props) => {
  const { text, size, weight, color, align } = props
  const modifireClassObject = useMemo(() => ({
    [styles[`text`]]: true,
    [styles[`text--font-color-${color}`]]: !!color,
    [styles[`text--font-size-${size}`]]: !!size,
    [styles[`text--font-weight-${weight}`]]: !!weight,
    [styles[`text--text-align-${align}`]]: !!align,
  }), [size, weight, color, align])

  return (
    <p className={generateClassName(modifireClassObject)}>{text}</p>
  )
}

export default Text