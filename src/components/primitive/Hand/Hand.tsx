import styles from '@/components/primitive/Hand/hand.module.sass'
import Icon from '@/components/primitive/Icon/Icon'
import Text from '@/components/primitive/Text/Text'
import type { Hand as HandType } from '@/interfaces/pages/search'

interface Props {
  hand: HandType
}

const Hand = (props: Props) => {
  const { hand } = props
  const suits = Object.keys(hand) as Array<keyof HandType>

  return (
    <div className={styles['hand']}>
      {suits.map((suit) => (
        <div className={styles['hand__suit']} key={suit}>
          <Icon name={suit} color={suit} />
          <Text text={hand[suit]} />
        </div>
      ))}
    </div>
  )
}

export default Hand
