import { SUIT, CALL_OPTION } from "@/types/components/enum"
import Button from "@/components/primitive/Button/Button";
import Icon from "@/components/primitive/Icon/Icon";
import type { IconName, Call } from "@/types/components";
import styles from "@/components/primitive/Bidding/bidding.module.sass"

interface Props {
  auction: Call[]
  onClick: (call: Call) => void
  undo: () => void
}

const Bidding = (props: Props) => {
  const { auction, onClick, undo } = props

  const bids: Call[] = [
    { id: 0, rank: 1, suit: SUIT.CLUB },
    { id: 1, rank: 1, suit: SUIT.DIAMOND },
    { id: 2, rank: 1, suit: SUIT.HEART },
    { id: 3, rank: 1, suit: SUIT.SPADE },
    { id: 4, rank: 1, suit: SUIT.NOTRUMP },
    { id: 5, rank: 2, suit: SUIT.CLUB },
    { id: 6, rank: 2, suit: SUIT.DIAMOND },
    { id: 7, rank: 2, suit: SUIT.HEART },
    { id: 8, rank: 2, suit: SUIT.SPADE },
    { id: 9, rank: 2, suit: SUIT.NOTRUMP },
    { id: 10, rank: 3, suit: SUIT.CLUB },
    { id: 11, rank: 3, suit: SUIT.DIAMOND },
    { id: 12, rank: 3, suit: SUIT.HEART },
    { id: 13, rank: 3, suit: SUIT.SPADE },
    { id: 14, rank: 3, suit: SUIT.NOTRUMP },
    { id: 15, rank: 4, suit: SUIT.CLUB },
    { id: 16, rank: 4, suit: SUIT.DIAMOND },
    { id: 17, rank: 4, suit: SUIT.HEART },
    { id: 18, rank: 4, suit: SUIT.SPADE },
    { id: 19, rank: 4, suit: SUIT.NOTRUMP },
    { id: 20, rank: 5, suit: SUIT.CLUB },
    { id: 21, rank: 5, suit: SUIT.DIAMOND },
    { id: 22, rank: 5, suit: SUIT.HEART },
    { id: 23, rank: 5, suit: SUIT.SPADE },
    { id: 24, rank: 5, suit: SUIT.NOTRUMP },
    { id: 25, rank: 6, suit: SUIT.CLUB },
    { id: 26, rank: 6, suit: SUIT.DIAMOND },
    { id: 27, rank: 6, suit: SUIT.HEART },
    { id: 28, rank: 6, suit: SUIT.SPADE },
    { id: 29, rank: 6, suit: SUIT.NOTRUMP },
    { id: 30, rank: 7, suit: SUIT.CLUB },
    { id: 31, rank: 7, suit: SUIT.DIAMOND },
    { id: 32, rank: 7, suit: SUIT.HEART },
    { id: 33, rank: 7, suit: SUIT.SPADE },
    { id: 34, rank: 7, suit: SUIT.NOTRUMP },
  ]
  const options = [
    { id: -1, rank: 0, suit: CALL_OPTION.PASS },
    { id: -2, rank: 0, suit: CALL_OPTION.DOUBLE },
    { id: -3, rank: 0, suit: CALL_OPTION.REDOUBLE }
  ]
  const lastBidId = auction.length > 0 ? auction.sort((a, b) => b.id - a.id)[0].id : -1
  const lastCall = auction.length > 0 ? auction.at(-1)?.suit : -1
  const isRedoubleCallable = auction.length > 0 && lastCall == CALL_OPTION.DOUBLE
  const isDoubleCallable = auction.length > 0 && lastBidId > -1 && lastCall !== CALL_OPTION.REDOUBLE && lastCall !== CALL_OPTION.DOUBLE

  return (
    <div>
      <div className={styles["bidding"]}>
        {bids.map((bid) => (
          <Button
            key={bid.id}
            label={
              <>
                {bid.rank}
                {bid.suit === SUIT.NOTRUMP ? (
                  "NT"
                ) : (
                  <Icon name={bid.suit as IconName} size="s" />
                )}
              </>
            }
            size="s"
            width="42px"
            disabled={bid.id <= lastBidId}
            onClick={() => onClick(bid)}
          />
        ))}
      </div>
      <div className={styles["bidding__options"]}>
        <Button
          label={options[0].suit}
          size="s"
          width="42px"
          onClick={() => onClick(options[0])}
        />
        <Button
          label={options[1].suit}
          size="s"
          width="42px"
          disabled={!isDoubleCallable}
          onClick={() => onClick(options[1])}
        />
        <Button
          label={options[2].suit}
          size="s"
          width="42px"
          disabled={!isRedoubleCallable}
          onClick={() => onClick(options[2])}
        />
        <Button label="Undo" size="s" width="86px" disabled={auction.length === 0} onClick={undo} />
      </div>
    </div>
  )
}

export default Bidding;