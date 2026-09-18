import styles from '@/components/pages/search/SearchResultTable/searchResultTable.module.sass'
import { useSearch } from "@/contexts/SearchContext";

const SearchResultTable = () => {
  const cols = ['96px', 'auto', '120px', '120px', '144px', '144px', '96px']
  const { results } = useSearch();

  return (
    <table className={styles['search-result-table']}>
      <colgroup>
        {cols.map((col, i) => (
          <col key={i} width={col} />
        ))}
      </colgroup>
      <thead>
        <tr>
          <th>Date</th>
          <th>Match Name</th>
          <th className={styles['search-result-table--header-team-one']}>Team 1</th>
          <th className={styles['search-result-table--header-team-two']}>Team 2</th>
          <th>Open Room Players</th>
          <th>Close Room Players</th>
          <th>Board No.</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {results.length === 0 && (
          <tr className={styles['search-result-table-row']}>
            <td colSpan={8} className={styles['search-result-table--no-results']}>No results found</td>
          </tr>
        )}
        {results.map((result) => (
          <tr key={result.match.id} className={styles['search-result-table-row']}>
            <td>{result.match.date}</td>
            <td className={styles['search-result-table--data-match-name']}>{result.match.name}</td>
            <td className={styles['search-result-table--data-team-one']}>{result.match.team_open}</td>
            <td className={styles['search-result-table--data-team-two']}>{result.match.team_close}</td>
            <td>
              <span>{result.players.north_open} - {result.players.south_open}</span><br />
              <span>{result.players.east_open} - {result.players.west_open}</span>
            </td>
            <td>
              <span>{result.players.north_close} - {result.players.south_close}</span><br />
              <span>{result.players.east_close} - {result.players.west_close}</span>
            </td>
            <td>#</td>
            <td>
              <a href="#" className={styles['search-result-table--data-link']}>View</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SearchResultTable;
