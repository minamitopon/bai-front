import Icon from "@/components/primitive/Icon/Icon";
import styles from "@/components/primitive/SuitValue/suitValue.module.sass";
import generateClassName from "@/functions/components/generateClassName"
import type { Suit } from "@/types/components";

interface Props {
  suit: Suit;
  value: string;
  type: "card" | "contract"
}

const SuitValue = (props: Props) => {
  const { suit, value, type } = props;
  const suitIcon = (() => {
    switch (suit) {
      case "s":
        return "spade";
      case "h":
        return "heart";
      case "d":
        return "diamond";
      case "c":
        return "club";
      default:
        return "";
    }
  })();

  const modifireClassObject = () => ({
    [styles[`suit-value`]]: true,
    [styles[`suit-value--${type}`]]: true
  })

  return (
    <div className={generateClassName(modifireClassObject())}>
      <span>{value}</span>
      <span><Icon name={suitIcon} size="m" color={suitIcon || undefined} /></span>
    </div>
  );
};

export default SuitValue;
