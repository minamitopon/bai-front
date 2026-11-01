import SuitValue from "@/components/primitive/SuitValue/SuitValue";
import styles from "@/components/pages/board/BoardPlayHistory/boardPlayHistory.module.sass";
import type { Suit } from "@/types/components";

interface Props {
  playLogs: { room: string; play: string[][] }[];
}

const cardSuits = ["s", "h", "d", "c"] as const;

const isCardSuit = (suit: string | undefined): suit is Exclude<Suit, "n"> =>
  cardSuits.some((cardSuit) => cardSuit === suit);

const BoardPlayHistory = ({ playLogs }: Props) => {
  const playLog = playLogs[0]?.play ?? [];

  return (
    <ol className={styles["board-play-history"]}>
      {playLog.map((trick, trickIndex) => (
        <li className={styles["board-play-history__trick"]} key={trickIndex}>
          <span className={styles["board-play-history__trick-number"]}>Trick {trickIndex + 1}</span>
          <ol className={styles["board-play-history__cards"]}>
            {trick.map((card, cardIndex) => {
              const suit = card[0]?.toLowerCase();
              const value = card.slice(1);

              return (
                <li className={styles["board-play-history__card"]} key={cardIndex}>
                  {isCardSuit(suit) && value ? (
                    <SuitValue suit={suit} value={value} type="card" />
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default BoardPlayHistory;
