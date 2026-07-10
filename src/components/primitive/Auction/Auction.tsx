import type { Call, IconName } from "@/types/components"
import { CALL_OPTION, SUIT } from "@/types/components/enum"
import Icon from "@/components/primitive/Icon/Icon"
import styles from "@/components/primitive/Auction/auction.module.sass"

interface Props {
  auction: Call[]
}

const Auction = (props: Props) => {
  const { auction } = props

  const toSymbol = (call: Call) => {
    switch (call.suit) {
      case CALL_OPTION.PASS:
        return "P"
      case CALL_OPTION.DOUBLE:
        return "X"
      case CALL_OPTION.REDOUBLE:
        return "XX"
      default:
        return (
          <>
            {call.rank}
            {call.suit === SUIT.NOTRUMP ? (
              "NT"
            ) : (
              <Icon name={call.suit as IconName} size="s" color={call.suit} />
            )}
          </>
        )
    }
  }

  return (
    <div className={styles["auction"]}>
      {auction.map((call) => (
        <div key={call.id} className={styles["auction__call"]}>
          {toSymbol(call)}
        </div>
      ))}
    </div>
  )
}

export default Auction
