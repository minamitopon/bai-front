import { IoFilter } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward, IoIosHelpCircleOutline } from "react-icons/io";
import { GiSpades, GiHearts, GiDiamonds, GiClubs } from "react-icons/gi";
import { useMemo, forwardRef } from "react"
import type { Color, Size, IconName } from "@/types/components"
import styles from "@/styles/components/primitive/icon.module.sass"
import generateClassName from "@/functions/components/generateClassName"

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  name: string,
  size?: Size,
  color?: Color,
}

const Icon = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { name, size = 'm', color, ...rest } = props
  const modifireClassObject = useMemo(() => ({
    [styles[`icon`]]: true,
    [styles[`icon--size-${size}`]]: !!size,
    [styles[`icon--color-${color}`]]: !!color,
  }), [size, color])
  const iconList = {
    filter: IoFilter,
    arrowBack: IoIosArrowBack,
    arrowForward: IoIosArrowForward,
    spade: GiSpades,
    heart: GiHearts,
    diamond: GiDiamonds,
    club: GiClubs,
    hint: IoIosHelpCircleOutline,
  } as const satisfies Record<IconName, React.ComponentType>
  const Icon = useMemo(() => iconList[name as IconName], [name])

  return (
    <span {...rest} ref={ref} className={generateClassName(modifireClassObject)}>
      {Icon && <Icon />}
    </span>
  )
})

export default Icon