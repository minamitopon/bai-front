import type { ReactNode } from "react";
import styles from "@/components/pages/board/BoardAuction/boardAuction.module.sass";
import Heading from "@/components/primitive/Heading/Heading";
import Icon from "@/components/primitive/Icon/Icon";
import type { IconName } from "@/types/components";

interface Props {
  boardNumber: number;
  auction: string;
}

const directions = ["W", "N", "E", "S"] as const;
const suitIcons: Partial<Record<string, IconName>> = {
  s: "spade",
  h: "heart",
  d: "diamond",
  c: "club",
};
const contractPattern = /^([1-7])(nt|[shdcn])$/i;

const encodeAuction = (value: string): string[] => {
  const replaceCall: Record<string, string> = {
    p: "P",
    d: "X",
    r: "XX",
  };
  const trimmedValue = value.trim();

  return trimmedValue
    ? trimmedValue.split(/\s+/).map((call) => {
      const callWithoutComment = call.replace(/!$/, ""); // コメントは非対応
      return replaceCall[callWithoutComment] ?? callWithoutComment;
    })
    : [];
};

const createAuctionRows = (boardNumber: number, auction: string): string[][] => {
  const dealerIndex = boardNumber % 4; // ディーラーの場所はmod 4で決める
  const rows: string[][] = [];

  encodeAuction(auction).forEach((call, index) => {
    const position = dealerIndex + index;
    const rowIndex = Math.floor(position / directions.length);
    rows[rowIndex] ??= Array<string>(directions.length).fill("");
    rows[rowIndex][position % directions.length] = call;
  });

  return rows;
};

const renderCall = (call: string): ReactNode => {
  if (!call) return null;

  const contract = call.match(contractPattern);
  const denomination = contract?.[2].toLowerCase();
  const suitIcon = denomination ? suitIcons[denomination] : undefined;

  if (!contract) {
    return <span className={styles["board-auction__call"]}>{call}</span>;
  }

  return (
    <span className={styles["board-auction__contract"]}>
      <span>{contract[1]}</span>
      {suitIcon ? <Icon name={suitIcon} size="l" /> : <span>NT</span>}
    </span>
  );
};

const BoardAuction = ({ boardNumber, auction }: Props) => {
  const rows = createAuctionRows(boardNumber, auction);

  return (
    <div className={styles["board-auction"]}>
      <div className={styles["board-auction__header"]}>
        <Heading level={2} text="Auction" />
      </div>
      <table className={styles["board-auction__table"]}>
        <thead>
          <tr>
            {directions.map((direction) => (
              <th key={direction} scope="col">{direction}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((call, callIndex) => (
                <td key={callIndex}>{renderCall(call)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardAuction;
