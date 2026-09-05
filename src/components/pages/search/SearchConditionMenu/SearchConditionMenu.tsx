import Heading from "@/components/primitive/Heading/Heading"
import Input from "@/components/primitive/Input/Input"
import Popover from "@/components/primitive/Popover/Popover"
import Icon from "@/components/primitive/Icon/Icon"
import Button from "@/components/primitive/Button/Button"
import Text from "@/components/primitive/Text/Text"
import styles from "@/components/pages/search/SearchConditionMenu/searchConditionMenu.module.sass"
import { useState } from "react"
import type { SearchCondition } from "@/interfaces/pages/search"

interface Props {
  conditions: SearchCondition
  updateConditions: (newConditions: SearchCondition) => void
}

const SearchConditionMenu = ({ conditions, updateConditions }: Props) => {
  const [tmpConditions, setTmpConditions] = useState<SearchCondition>(conditions)

  const updateTmpConditions = (key: keyof SearchCondition, value: string) => {
    setTmpConditions(prev => ({ ...prev, [key]: value }))
  }
  const updateHandsConditions = (suit: keyof SearchCondition['hands'], value: string) => {
    setTmpConditions(prev => ({ ...prev, hands: { ...prev.hands, [suit]: value } }))
  }

  const clearTmpConditions = () => {
    setTmpConditions(conditions)
  }

  return (
    <div className={styles['search-condition-menu']}>
      <div className={styles['search-condition-menu__search-queries']}>
        <Heading text="Search Queries" level={2} color="secondary" />
        <Input label="Player Name" value={tmpConditions.playerName} placeholder="e.g. Helgemo" onChange={(value) => { updateTmpConditions("playerName", value) }} />
        <Input label="Team Name" value={tmpConditions.teamName} placeholder="e.g. Nickell" onChange={(value) => { updateTmpConditions("teamName", value) }} />
        <Input label="Match/Event Name" value={tmpConditions.matchEventName} placeholder="e.g. Bermuda Bowl" onChange={(value) => { updateTmpConditions("matchEventName", value) }} />
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
        <Input icon={<Icon name="spade" color="spade" />} value={tmpConditions.hands.spade} placeholder="AK863" onChange={(value) => { updateHandsConditions("spade", value) }} />
        <Input icon={<Icon name="heart" color="heart" />} value={tmpConditions.hands.heart} placeholder="KQxx" onChange={(value) => { updateHandsConditions("heart", value) }} />
        <Input icon={<Icon name="diamond" color="diamond" />} value={tmpConditions.hands.diamond} placeholder="xxx" onChange={(value) => { updateHandsConditions("diamond", value) }} />
        <Input icon={<Icon name="club" color="club" />} value={tmpConditions.hands.club} placeholder="Ax" onChange={(value) => { updateHandsConditions("club", value) }} />
      </div>
      <div className={styles['search-condition-menu__buttons']}>
        <Button label="Search" color="spade" onClick={() => updateConditions(tmpConditions)} />
        <Button label="Clear" onClick={clearTmpConditions} />
      </div>
    </div>
  )
}

export default SearchConditionMenu
