import { useMemo } from "react"
import type { Color, Size } from "@/types/components"
import generateClassName from "@/functions/components/generateClassName"
import styles from "@/styles/components/primitive/button.module.sass"

interface Props {
  label: string,
  color: Color,
  size?: Size,
  disabled?: boolean,
  waiting?: boolean,
  onClick: () => void,
}


const Button = (props: Props) => {
  const [size = 'm', desabled = false, waiting = false] = [props.size, props.disabled, props.waiting]
  const modifireClassObject = useMemo(() => ({
    [styles[`button`]]: true,
    [styles[`button--${props.color}`]]: true,
    [styles[`button--${size}`]]: true,
    [styles.disabled]: desabled,
    [styles.waiting]: waiting,
  }), [size, desabled, waiting])
  
  return (
    <button className={generateClassName(modifireClassObject)} onClick={props.onClick}>{props.label}</button>
  )
}

export default Button