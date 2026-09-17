import { useContext, useState } from "react";
import Container from "@/components/primitive/Container/Container";
import Heading from "@/components/primitive/Heading/Heading";
import SearchConditionMenu from "@/components/pages/search/SearchConditionMenu/SearchConditionMenu";
import SearchAuction from "@/components/pages/search/SearchAuction/SearchAuction";
import SearchResultTable from "@/components/pages/search/SearchResultTable/SearchResultTable";
import styles from "@/pages/search/search.module.sass";
import type { SearchCondition } from "@/interfaces/pages/search"
import { SearchContext } from "@/contexts/SearchContext";

const Search = () => {
  const context = useContext(SearchContext);
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

  const handleSearch = async (newConditions: SearchCondition) => {
    // auctionの条件はSearchAuctionから更新されるため、ここで最新の情報とマージする
    const updatedConditions: SearchCondition = {
      ...newConditions,
      auction: conditions.auction,
    }

    setConditions(updatedConditions)
    context?.findByCondition(updatedConditions)
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
        <SearchConditionMenu conditions={conditions} onSearch={handleSearch} />
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