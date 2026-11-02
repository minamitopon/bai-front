import { useEffect, useState } from "react";
import styles from "@/components/pages/board/BoardAnalysis/boardAnalysis.module.sass";
import Heading from "@/components/primitive/Heading/Heading";
import Icon from "@/components/primitive/Icon/Icon";
import { analyseDeal, directions, strains, toPbn } from "@/functions/components/dds";
import type { Hand } from "@/interfaces/pages/search";

interface Props {
  hands: Hand[]
}

interface Result {
  pbn: string
  tricks?: number[][]
  error?: string
}

const suitIcons = ["spade", "heart", "diamond", "club"] as const;

const BoardAnalysis = ({ hands }: Props) => {
  const pbn = hands.length === directions.length ? toPbn(hands) : null;
  const [ddsResult, setResult] = useState<Result | null>(null);

  useEffect(() => {
    if (!pbn) return;

    let cancelled = false;
    analyseDeal(pbn)
      .then((tricks) => {
        if (!cancelled) setResult({ pbn, tricks });
      })
      .catch((e: unknown) => {
        if (!cancelled) setResult({ pbn, error: e instanceof Error ? e.message : "Analysis failed" });
      });

    return () => {
      cancelled = true;
    };
  }, [pbn]);

  // ボード切り替え時の分析ラグ対応
  const current = ddsResult?.pbn === pbn ? ddsResult : null;

  return (
    <div className={styles["board-analysis"]}>
      <div className={styles["board-analysis__header"]}>
        <Heading level={2} text="Double Dummy" />
      </div>
      <div className={styles["board-analysis__body"]}>
        {pbn && !current && <p>Analyzing...</p>}
        {current?.error && <p>{current.error}</p>}
        {current?.tricks && (
          <table className={styles["board-analysis__table"]}>
            <thead>
              <tr>
                <th />
                {directions.map((direction) => (
                  <th key={direction} scope="col">{direction}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {strains.map((strain, strainIndex) => (
                <tr key={strain}>
                  <th scope="row">
                    {strainIndex < suitIcons.length
                      ? <Icon name={suitIcons[strainIndex]} color={suitIcons[strainIndex]} />
                      : strain}
                  </th>
                  {directions.map((direction, directionIndex) => (
                    <td key={direction}>{current.tricks?.[strainIndex][directionIndex]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BoardAnalysis;
