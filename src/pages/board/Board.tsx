import BoardHands from "@/components/pages/board/BoardHands/BoardHands";
import BoardPlayHistory from "@/components/pages/board/BoardPlayHistory/BoardPlayHistory";
import styles from "@/pages/board/board.module.sass";

const Board = () => {
  return (
    <div className={styles.board}>
      <div>
        <BoardHands hands={[]} />
        <BoardPlayHistory playLog={[]} />
      </div>
      <div></div>
    </div>
  );
};

export default Board;