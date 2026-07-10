import styles from '@/components/pages/matches/MatchTable/MatchTable.module.sass'

interface Props {
  records: any[]
}

const MatchTable = ({ records }: Props) => {
  const cols = ['120px', 'auto', '120px', '144px', '144px', '96px', '200px', '200px', '200px']

  return (
    <table className={styles['match-table']}>
      <colgroup>
        {cols.map((col, i) => (
          <col key={i} width={col} />
        ))}
      </colgroup>
      <thead>
        <tr>
          <th>Date</th>
          <th>Match Name</th>
          <th>Round</th>
          <th className={styles['match-table--header-team-one']}>Team 1</th>
          <th className={styles['match-table--header-team-two']}>Team 2</th>
          <th>Score</th>
          <th>Open Room Players</th>
          <th>Close Room Players</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.match.id} className={styles['match-table-row']}>
            <td>{record.match.date}</td>
            <td className={styles['match-table--data-match-name']}>{record.match.name}</td>
            <td>{record.match_progress.round}</td>
            <td className={styles['match-table--data-team-one']}>{record.match.team_open}</td>
            <td className={styles['match-table--data-team-two']}>{record.match.team_close}</td>
            <td>{record.match_progress.imp_open} - {record.match_progress.imp_close}</td>
            <td>
              <span>{record.players.north_open} - {record.players.south_open}</span><br />
              <span>{record.players.east_open} - {record.players.west_open}</span>
            </td>
            <td>
              <span>{record.players.north_close} - {record.players.south_close}</span><br />
              <span>{record.players.east_close} - {record.players.west_close}</span>
            </td>
            <td>
              <a href="#" className={styles['match-table--data-link']}>View</a> | <a href="#" className={styles['match-table--data-link']}>Download</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MatchTable;