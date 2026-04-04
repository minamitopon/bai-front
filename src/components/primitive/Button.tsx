import { useMemo } from "react"
import Icon from '@/components/primitive/Icon'
import type { Color, Size, IconName } from "@/types/components"
import generateClassName from "@/functions/components/generateClassName"
import styles from "@/styles/components/primitive/button.module.sass"

interface Props {
  label?: string,
  color?: Color,
  size?: Size,
  disabled?: boolean,
  waiting?: boolean,
  icon?: IconName
  onClick: () => void,
}


const Button = (props: Props) => {
  const { size = 'm', disabled = false, waiting = false, color = 'white', label, icon, onClick } = props
  const modifireClassObject = useMemo(() => ({
    [styles[`button`]]: true,
    [styles[`button--${color}`]]: !!color,
    [styles[`button--${size}`]]: true,
    [styles[`button--border`]]: color === 'white',
    [styles.disabled]: disabled,
    [styles.waiting]: waiting,
  }), [color, size, disabled, waiting])
  const iconColor = useMemo(() => {
    return color !== 'white' ? 'white' : undefined
  }, [color])
  
  return (
    <button className={generateClassName(modifireClassObject)} onClick={onClick} disabled={disabled || waiting}>
      {icon && <Icon name={icon} size={size} color={iconColor} />}
      {label}
    </button>
  )
}

export default Button