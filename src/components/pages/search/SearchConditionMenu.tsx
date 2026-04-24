import Heading from "@/components/primitive/Heading"
import Input from "@/components/primitive/Input"
import Popover from "@/components/primitive/Popover"
import Icon from "@/components/primitive/Icon"
import Button from "@/components/primitive/Button"
import Text from "@/components/primitive/Text"
import styles from "@/styles/components/pages/search/searchConditionMenu.module.sass"
import { useState } from "react"

interface SearchCondition {
  playerName: string
  teamName: string
  matchEventName: string
  hands: {
    spade: string
    heart: string
    diamond: string
    club: string
  }
}

interface Props {
  action: () => void;
}

const SearchConditionMenu = ({ action }: Props) => {
  const initialConditions: SearchCondition = { playerName: "", teamName: "", matchEventName: "", hands: { spade: "", heart: "", diamond: "", club: "" } }
  const [conditions, setConditions] = useState<SearchCondition>(initialConditions)

  const updateConditions = (key: keyof SearchCondition, value: string) => {
    setConditions(prev => ({ ...prev, [key]: value }))
  }
  const updateHandsConditions = (suit: keyof SearchCondition['hands'], value: string) => {
    setConditions(prev => ({ ...prev, hands: { ...prev.hands, [suit]: value } }))
  }

  const clearConditions = () => {
    setConditions(initialConditions)
  }

  return (
    <div className={styles['search-condition-menu']}>
      <div className={styles['search-condition-menu__search-queries']}>
        <Heading text="Search Queries" level={2} color="secondary" />
        <Input label="Player Name" value={conditions.playerName} placeholder="e.g. Helgemo" onChange={(value) => { updateConditions("playerName", value) }} />
        <Input label="Team Name" value={conditions.teamName} placeholder="e.g. Nickell" onChange={(value) => { updateConditions("teamName", value) }} />
        <Input label="Match/Event Name" value={conditions.matchEventName} placeholder="e.g. Bermuda Bowl" onChange={(value) => { updateConditions("matchEventName", value) }} />
      </div>
      <div className={styles['search-condition-menu__hand-search']}>
        <span className={styles['search-condition-menu__hand-search-heading']}>
          <Heading text="Hand Search" level={2} color="secondary" />
          <Popover>
            <div>
              <Text text="You can search hands by distribution." color="primary" size="s" />
              <Text text="Valid characters are: A, K, Q, J, T, 9, 8, 7, 6, 5, 4, 3, 2." color="primary" size="s" />
              <Text text="X, x can be used in place of a small card(2~9)" color="primary" size="s" />
            </div>
          </Popover>
        </span>
        <Input icon={<Icon name="spade" color="spade" />} value={conditions.hands.spade} placeholder="AK863" onChange={(value) => { updateHandsConditions("spade", value) }} />
        <Input icon={<Icon name="heart" color="heart" />} value={conditions.hands.heart} placeholder="KQxx" onChange={(value) => { updateHandsConditions("heart", value) }} />
        <Input icon={<Icon name="diamond" color="diamond" />} value={conditions.hands.diamond} placeholder="xxx" onChange={(value) => { updateHandsConditions("diamond", value) }} />
        <Input icon={<Icon name="club" color="club" />} value={conditions.hands.club} placeholder="Ax" onChange={(value) => { updateHandsConditions("club", value) }} />
      </div>
      <div className={styles['search-condition-menu__buttons']}>
        <Button label="Search" color="spade" onClick={action} />
        <Button label="Clear" onClick={clearConditions} />
      </div>
    </div>
  )
}

export default SearchConditionMenu
