import Heading from '@/components/primitive/Heading/Heading'
// import Button from '@/components/primitive/Button/Button'
import Bidding from '@/components/primitive/Bidding/Bidding'
import Auction from '@/components/primitive/Auction/Auction'
import styles from '@/components/pages/search/SearchAuction/searchAuction.module.sass'

const SearchAuction = () => {
  return (
    <div className={styles['search-auction']}>
      <div>
        <div className={styles['search-auction__heading']}>
          <Heading text="Advanced Auction Search" level={2} />
        </div>
        <div className={styles['search-auction__auction-area']}>
          <Bidding auction={[]} onClick={() => {}} undo={() => {}} />
          <Auction auction={[]} />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default SearchAuction;
