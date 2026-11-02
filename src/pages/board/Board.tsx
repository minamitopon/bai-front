import { useEffect, useState } from "react";
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
  const { board, playlogs, findBoard, findPlaylogs } = useBoardContext();
  const [selectedRoom, setSelectedRoom] = useState("o");

  const parsedBoardNumber = Number(boardNumber);
  const persedHands = board ? [
    toHand(board, "north"),
    toHand(board, "east"),
    toHand(board, "south"),
    toHand(board, "west"),
  ] : []

  useEffect(() => {
    if (uuid && Number.isInteger(parsedBoardNumber) && parsedBoardNumber > 0) {
      void findBoard(uuid, parsedBoardNumber);
      void findPlaylogs(uuid, parsedBoardNumber);
    }
  }, [uuid, parsedBoardNumber, findBoard, findPlaylogs]);

  const handleBack = () => {
    window.history.back();
  }

  const handleChangeRoom = (room: string) => () => {
    setSelectedRoom(room);
  };

  const selectedPlaylog = playlogs.find(({ room }) => room === selectedRoom)

  return (
    <div className={styles["board"]}>
      <div className={styles["board__left"]}>
        <BoardHands
          hands={persedHands}
        />
        <BoardPlayHistory playLog={selectedPlaylog?.play ?? []} />
      </div>
      <div className={styles["board__right"]}>
        <div className={styles["board__room-select-buttons"]}>
          <Button
            label="Open"
            width="100%"
            isActive={selectedRoom === "o"}
            onClick={handleChangeRoom("o")}
          />
          <Button
            label="Close"
            width="100%"
            isActive={selectedRoom === "c"}
            onClick={handleChangeRoom("c")}
          />
        </div>
        <BoardAuction
          boardNumber={parsedBoardNumber}
          auction={selectedPlaylog?.auction ?? ""}
        />
        <BoardAnalysis hands={persedHands} />
        <Button
          label="Back to List"
          width="100%"
          icon="arrowBack"
          onClick={handleBack}
        />
      </div>
    </div>
  );
};

export default Board;