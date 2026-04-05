import styles from "@/styles/components/primitive/heading.module.sass"

interface Props {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = (props: Props) => {
  const { text, level } = props
  const Tag = `h${level}` as const
  return (
    <Tag className={styles[`heading--${level}`]}>{text}</Tag>
  )
}

export default Heading