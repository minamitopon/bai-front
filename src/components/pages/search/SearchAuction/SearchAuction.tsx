import Heading from '@/components/primitive/Heading/Heading'
import Bidding from '@/components/primitive/Bidding/Bidding'
import Auction from '@/components/primitive/Auction/Auction'
import styles from '@/components/pages/search/SearchAuction/searchAuction.module.sass'
import type { Call } from '@/types/components'

interface Props {
  auctionSequence: Call[]
  onAuctionSequenceChange: (auctionSequence: Call[]) => void
}

const SearchAuction = ({ auctionSequence, onAuctionSequenceChange }: Props) => {
  const handleUpdateAuction = (call: Call) => {
    const nextAuctionSequence = [...auctionSequence, call]
    onAuctionSequenceChange(nextAuctionSequence)
  }

  const handleUndo = () => {
    const nextAuctionSequence = auctionSequence.slice(0, -1)
    onAuctionSequenceChange(nextAuctionSequence)
  }

  return (
    <div className={styles['search-auction']}>
      <div>
        <div className={styles['search-auction__heading']}>
          <Heading text="Advanced Auction Search" level={2} />
        </div>
        <div className={styles['search-auction__auction-area']}>
          <Bidding auction={auctionSequence} onClick={handleUpdateAuction} undo={handleUndo} />
          <Auction auction={auctionSequence} />
        </div>
      </div>
    </div>
  )
}

export default SearchAuction;
