import { useEffect } from "react";
import { useParams } from "react-router";
import BoardHands from "@/components/pages/board/BoardHands/BoardHands";
import BoardPlayHistory from "@/components/pages/board/BoardPlayHistory/BoardPlayHistory";
import { useBoardContext } from "@/contexts/BoardContext";
import type { Board as BoardData } from "@/interfaces/pages/board";
import type { Hand } from "@/interfaces/pages/search";
import styles from "@/pages/board/board.module.sass";

const toHand = (board: BoardData, direction: "north" | "east" | "south" | "west"): Hand => ({
  spade: board[`${direction}_spade`],
  heart: board[`${direction}_heart`],
  diamond: board[`${direction}_diamond`],
  club: board[`${direction}_club`],
});

const Board = () => {
  const { uuid, boardNumber } = useParams();
  const { board, find } = useBoardContext();

  useEffect(() => {
    const parsedBoardNumber = Number(boardNumber);
    if (uuid && Number.isInteger(parsedBoardNumber) && parsedBoardNumber > 0) {
      void find(uuid, parsedBoardNumber);
    }
  }, [uuid, boardNumber, find]);

  return (
    <div className={styles.board}>
      <div>
        <BoardHands
          hands={board ? [
            toHand(board, "north"),
            toHand(board, "east"),
            toHand(board, "south"),
            toHand(board, "west"),
          ] : []}
        />
        <BoardPlayHistory playLog={[]} />
      </div>
      <div></div>
    </div>
  );
};

export default Board;