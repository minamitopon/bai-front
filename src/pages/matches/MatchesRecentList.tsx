import Heading from "@/components/primitive/Heading";
import Text from "@/components/primitive/Text";
import MatchTable from "@/components/pages/matches/MatchTable";
import { useMatches } from "@/hooks/useMatches";

const MatchesRecentList = () => {
  const { matches } = useMatches();

  return (
    <>
      <Heading text="Recent Matches" level={1} />
      <Text text="Viewing the 100 most recent competitive bridge matches worldwide." />
      <MatchTable records={matches} />
    </>
  );
};

export default MatchesRecentList;