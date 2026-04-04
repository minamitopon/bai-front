import { useMemo } from "react"
import type { Color, Size } from "@/types/components"
import generateClassName from "@/functions/components/generateClassName"
import styles from "@/styles/components/primitive/button.module.sass"

interface Props {
  label?: string,
  color?: Color,
  size?: Size,
  disabled?: boolean,
  waiting?: boolean,
  onClick: () => void,
}


const Button = (props: Props) => {
  const { size = 'm', disabled = false, waiting = false, color = '', label, onClick } = props
  const modifireClassObject = useMemo(() => ({
    [styles[`button`]]: true,
    [styles[`button--${color}`]]: !!color,
    [styles[`button--${size}`]]: true,
    [styles.disabled]: disabled,
    [styles.waiting]: waiting,
  }), [color, size, disabled, waiting])
  
  return (
    <button className={generateClassName(modifireClassObject)} onClick={onClick} disabled={disabled || waiting}>
      {label}
    </button>
  )
}

export default Button