import styles from "@/components/primitive/Heading/heading.module.sass"

interface Props {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
  color?: 'primary' | 'secondary'
}

const Heading = (props: Props) => {
  const { text, level, color = 'primary' } = props
  const Tag = `h${level}` as const
  return (
    <Tag className={`${styles[`heading--${level}`]} ${styles[`heading--${color}`]}`}>{text}</Tag>
  )
}

export default Heading