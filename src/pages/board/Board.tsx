import { useEffect } from "react";
import { useParams } from "react-router";
import Button from "@/components/primitive/Button/Button";
import BoardHands from "@/components/pages/board/BoardHands/BoardHands";
import BoardPlayHistory from "@/components/pages/board/BoardPlayHistory/BoardPlayHistory";
import BoardAuction from "@/components/pages/board/BoardAuction/BoardAuction";
import BoardAnalysis from "@/components/pages/board/BoardAnalysis/BoardAnalysis";
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

  const parsedBoardNumber = Number(boardNumber);
  const persedHands = board ? [
    toHand(board, "north"),
    toHand(board, "east"),
    toHand(board, "south"),
    toHand(board, "west"),
  ] : []

  useEffect(() => {
    if (uuid && Number.isInteger(parsedBoardNumber) && parsedBoardNumber > 0) {
      void find(uuid, parsedBoardNumber);
    }
  }, [uuid, boardNumber, find]);

  const handleBack = () => {
    window.history.back();
  }

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
  
  const mockAuction = "2D! p 2N! p 3C! p 3D! d 3S! p 4H p p p"

  return (
    <div className={styles["board"]}>
      <div className={styles["board-left"]}>
        <BoardHands
          hands={persedHands}
        />
        <BoardPlayHistory playLog={mockPlayLog} />
      </div>
      <div className={styles["board-right"]}>
        <Button
          label="Back to List"
          width="100%"
          icon="arrowBack"
          onClick={handleBack}
        />
        <BoardAuction
          boardNumber={parsedBoardNumber}
          auction={mockAuction}
        />
        <BoardAnalysis hands={persedHands} />
      </div>
    </div>
  );
};

export default Board;