import Heading from "@/components/primitive/Heading"
import Input from "@/components/primitive/Input"
import Popover from "@/components/primitive/Popover"
import Icon from "@/components/primitive/Icon"
import Button from "@/components/primitive/Button"
import styles from "@/styles/components/pages/search/searchConditionMenu.module.sass"

const SearchConditionMenu = () => {
  return (
    <div className={styles['search-condition-menu']}>
      <div className={styles['search-condition-menu__search-queries']}>
        <Heading text="Search Queries" level={2} color="secondary" />
        <Input label="Player Name" value="" placeholder="e.g. Helgemo" onChange={() => { }} />
        <Input label="Team Name" value="" placeholder="e.g. Nickell" onChange={() => { }} />
        <Input label="Match/Event Name" value="" placeholder="e.g. Bermuda Bowl" onChange={() => { }} />
      </div>
      <div className={styles['search-condition-menu__hand-search']}>
        <span className={styles['search-condition-menu__hand-search-heading']}>
          <Heading text="Hand Search" level={2} color="secondary" />
          <Popover />
        </span>
        <Input icon={<Icon name="spade" color="spade" />} value="" placeholder="AK863" onChange={() => { }} />
        <Input icon={<Icon name="heart" color="heart" />} value="" placeholder="KQxx" onChange={() => { }} />
        <Input icon={<Icon name="diamond" color="diamond" />} value="" placeholder="xxx" onChange={() => { }} />
        <Input icon={<Icon name="club" color="club" />} value="" placeholder="Ax" onChange={() => { }} />
      </div>
      <div className={styles['search-condition-menu__buttons']}>
        <Button label="Search" color="spade" onClick={() => { }} />
        <Button label="Clear" onClick={() => { }} />
      </div>
    </div>
  )
}

export default SearchConditionMenu
