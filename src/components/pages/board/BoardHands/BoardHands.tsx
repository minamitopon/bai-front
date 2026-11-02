import styles from "@/components/pages/board/BoardHands/boardHands.module.sass";
import type { Hand } from "@/interfaces/pages/search";
import Icon from "@/components/primitive/Icon/Icon";

interface Props {
  hands: Hand[];
}

const BoardHands = ({ hands }: Props) => {
  return (
    <div className={styles["board-hands"]}>
      {hands.map((hand, index) => (
        <section key={index} className={styles["board-hand"]}>
          <div className={styles["board-hand__cards"]}>
            {(Object.keys(hand) as Array<keyof Hand>).map((suit) => (
              <div key={suit} className={styles["board-hand__suit"]}>
                <Icon name={suit} color={suit} />
                <span>{hand[suit]}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default BoardHands;
