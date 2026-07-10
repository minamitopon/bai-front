import { useMemo, type ReactNode } from "react"
import Icon from '@/components/primitive/Icon/Icon'
import type { Color, Size, IconName } from "@/types/components"
import generateClassName from "@/functions/components/generateClassName"
import styles from "@/components/primitive/Button/button.module.sass"

interface Props {
  label?: ReactNode | string,
  width?: string,
  height?: string,
  color?: Color,
  size?: Size,
  isActive?: boolean,
  disabled?: boolean,
  waiting?: boolean,
  icon?: IconName
  onClick: () => void,
}


const Button = (props: Props) => {
  const { width = 'auto', height = 'auto', size = 'm', isActive = false, disabled = false, waiting = false, color = 'white', label, icon, onClick } = props
  const styleObject = useMemo(() => ({
    width,
    height
  }), [width])
  const modifireClassObject = useMemo(() => ({
    [styles[`button`]]: true,
    [styles[`button--${color}`]]: !!color,
    [styles[`button--${size}`]]: true,
    [styles[`button--border`]]: color === 'white',
    [styles[`button--is-active`]]: isActive,
    [styles[`button--disabled`]]: disabled,
    [styles[`button--waiting`]]: waiting,
  }), [color, size, isActive, disabled, waiting])
  const iconColor = useMemo(() => {
    return color !== 'white' ? 'white' : undefined
  }, [color])

  const handleClick = () => {
    if (disabled || waiting) return
    onClick()
  }

  return (
    <button className={generateClassName(modifireClassObject)} onClick={handleClick} aria-disabled={disabled || waiting} style={styleObject}>
      {icon && <Icon name={icon} size={size} color={iconColor} />}
      <span className={styles[`button--label`]}>{label}</span>
    </button>
  )
}

export default Button