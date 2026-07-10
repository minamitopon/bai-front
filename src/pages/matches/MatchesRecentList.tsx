import Heading from "@/components/primitive/Heading/Heading";
import Text from "@/components/primitive/Text/Text";
import MatchTable from "@/components/pages/matches/MatchTable/MatchTable";
import Paging from "@/components/primitive/Paging/Paging";
import Container from "@/components/primitive/Container/Container";
import styles from "@/styles/pages/matches/matchesRecentList.module.sass";
import { useMatches } from "@/hooks/useMatches";
import { usePagination } from "@/hooks/usePagination";

const MatchesRecentList = () => {
  const { matches } = useMatches();
  const { pagedContents, currentPage, lastPage, pageUp, pageDown, jumpToPage } = usePagination(matches);

  return (
    <div className={styles['matches-recent-list']}>
      <Container space="s">
        <Heading text="Recent Matches" level={1} />
      </Container>
      <Container space="l">
        <Text text="Viewing the 100 most recent competitive bridge matches worldwide." />
      </Container>
      <div className={styles['matches-recent-list--table-container']}>
        <div className={styles['matches-recent-list--table']}>
          <MatchTable records={pagedContents} />
        </div>
        <Paging
          current={currentPage}
          last={lastPage}
          total={matches.length}
          pageUp={pageUp}
          pageDown={pageDown}
          jumpToPage={jumpToPage}
        />
      </div>
    </div>
  );
};

export default MatchesRecentList;