import { useContext } from "react";
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
  if (!context) {
    throw new Error("Search must be used within a Search DataCenter")
  }

  const { condition, setCondition, findByCondition } = context

  const handleSearch = async (newConditions: SearchCondition) => {
    // auctionの条件はSearchAuctionから更新されるため、ここで最新の情報とマージする
    const updatedConditions: SearchCondition = {
      ...newConditions,
      auction: condition.auction,
    }

    await findByCondition(updatedConditions)
  }

  const handleUpdateAuction = (auction: SearchCondition['auction']) => {
    setCondition({
      ...condition,
      auction,
    })
  }

  return (
    <div className={styles['search']}>
      <div className={styles['search__side-menu']}>
        <SearchConditionMenu conditions={condition} onSearch={handleSearch} />
      </div>
      <div className={styles['search__main']}>
        <Container space="xl">
          <SearchAuction
            auctionSequence={condition.auction || []}
            onAuctionSequenceChange={handleUpdateAuction}
          />
        </Container>
        <div>
          <Container space="l">
            <Heading text="Search Results" level={1} />
          </Container>
          <SearchResultTable />
        </div>
      </div>
      {/* <div className={styles['search__history']}>
      </div> */}
    </div>
  )
}

export default Search