import { useState } from "react";
import Container from "@/components/primitive/Container/Container";
import Heading from "@/components/primitive/Heading/Heading";
import SearchConditionMenu from "@/components/pages/search/SearchConditionMenu/SearchConditionMenu";
import SearchAuction from "@/components/pages/search/SearchAuction/SearchAuction";
import SearchResultTable from "@/components/pages/search/SearchResultTable/SearchResultTable";
import styles from "@/pages/search/search.module.sass";
import type { SearchCondition } from "@/interfaces/pages/search"

const Search = () => {
  const [conditions, setConditions] = useState<SearchCondition>({
    playerName: "",
    teamName: "",
    matchEventName: "",
    hands: {
      spade: "",
      heart: "",
      diamond: "",
      club: ""
    },
    auction: []
  })

  const handleUpdateConditions = (newConditions: SearchCondition) => {
    setConditions(newConditions)
  }

  const handleUpdateAuction = (auction: SearchCondition['auction']) => {
    setConditions((currentConditions) => ({
      ...currentConditions,
      auction,
    }))
  }

  return (
    <div className={styles['search']}>
      <div className={styles['search__side-menu']}>
        <SearchConditionMenu conditions={conditions} updateConditions={handleUpdateConditions} />
      </div>
      <div className={styles['search__main']}>
        <Container space="xl">
          <SearchAuction
            auctionSequence={conditions.auction || []}
            onAuctionSequenceChange={handleUpdateAuction}
          />
        </Container>
        <div>
          <Container space="l">
            <Heading text="Search Results" level={1} />
          </Container>
          <SearchResultTable results={[]} />
        </div>
      </div>
      <div className={styles['search__history']}>
      </div>
    </div>
  )
}

export default Search