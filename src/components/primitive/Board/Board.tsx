import styles from "@/components/primitive/Board/board.module.sass"
import type { Direction } from "@/types/components"

interface Props {
  boardNumber: number
}

const directions: Direction[] = ['north', 'east', 'south', 'west']

const Board = (props: Props) => {
  const { boardNumber } = props

  const isDealer = (direction: Direction) => {
    return directions[(boardNumber - 1) % 4] === direction
  }

  return (
    <div className={styles['board']}>
      {directions.map((direction) => (
        <span key={direction} className={`${styles['board__side']} ${styles[`board__side--${direction}`]}`}>
          {isDealer(direction) && 'D'}
        </span>
      ))}
      <span className={styles['board__number']}>{boardNumber}</span>
    </div>
  )
}

export default Board
