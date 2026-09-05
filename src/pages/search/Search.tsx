import SearchConditionMenu from "@/components/pages/search/SearchConditionMenu/SearchConditionMenu";
import SearchAuction from "@/components/pages/search/SearchAuction/SearchAuction";
import styles from "@/pages/search/search.module.sass";

const Search = () => {
  return (
    <div className={styles['search']}>
      <div className={styles['search__side-menu']}>
        <SearchConditionMenu action={() => {}} />
      </div>
      <div className={styles['search__main']}>
        <SearchAuction />
      </div>
      <div className={styles['search__history']}>
      </div>
    </div>
  )
}

export default Search