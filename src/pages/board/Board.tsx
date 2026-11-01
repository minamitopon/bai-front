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

  const mockPlayLog = [
      ["hJ", "h2", "h4", "hA"],
      ["sK", "s4", "s3", "sA"],
      ["c9", "cA", "c3", "c2"],
      ["s9", "s8", "s2", "s7"],
      ["s5", "c6", "sJ", "s6"],
      ["hK", "h6", "c5", "h9"],
      ["hQ", "h7", "cJ", "hT"],
      ["d5", "d9", "dJ", "dK"],
      ["cK", "cQ", "c4", "sT"],
      ["sQ", "cT", "h3", "c7"],
      ["d2", "d4", "dQ", "d3"],
      ["d6", "dT", "dA", "d7"],
      ["d8", "c8", "h5", "h8"],
    ]

  return (
    <div className={styles["board"]}>
      <div className={styles["board-left"]}>
        <BoardHands
          hands={board ? [
            toHand(board, "north"),
            toHand(board, "east"),
            toHand(board, "south"),
            toHand(board, "west"),
          ] : []}
        />
        <BoardPlayHistory playLog={mockPlayLog} />
      </div>
      <div className={styles["board-right"]}></div>
    </div>
  );
};

export default Board;