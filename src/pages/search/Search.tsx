import SearchConditionMenu from "@/components/pages/search/SearchConditionMenu/SearchConditionMenu";
import styles from "@/pages/search/search.module.sass";

const Search = () => {
  return (
    <div className={styles['search']}>
      <div className={styles['search--side-menu']}>
        <SearchConditionMenu action={() => {}} />
      </div>
      <div className={styles['search--main']}>
      </div>
    </div>
  )
}

export default Search