import { useMemo } from "react"
import styles from "@/components/primitive/Container/container.module.sass"
import generateClassName from "@/functions/components/generateClassName"
import type { Space } from "@/types/components"

interface Props {
  children: React.ReactNode
  space?: Space
}

const Container = (props: Props) => {
  const { children, space = 'm' } = props
  const modifireClassObject = useMemo(() => ({
    [styles[`container`]]: true,
    [styles[`container--${space}`]]: !!space,
  }), [space])

  return (
    <div className={generateClassName(modifireClassObject)}>
      {children}
    </div>
  )
}

export default Container