import { useMemo } from "react"
import Text from "@/components/primitive/Text"
import Button from "@/components/primitive/Button"
import styles from "@/styles/components/primitive/paging.module.sass"

interface Props {
  current: number
  total: number
  pageUp: () => void
  pageDown: () => void
  jumpToPage: (page: number) => void
}

const Paging = ({ current, total, pageUp, pageDown, jumpToPage }: Props) => {
  const currentPosition = useMemo(() => {
    return `Showing ${current * 10 - 9} to ${current * 10} of ${total} entries`
  }, [current, total])
  const lastPage = useMemo(() => {
    return Math.ceil(total / 10)
  }, [total])
  return (
    <div className={styles['paging']}>
      <Text text={currentPosition} />
      <div className={styles['paging__buttons']}>
        <Button icon={`arrowBack`} onClick={pageDown} size={`s`} />
        <Button label={current} onClick={() => jumpToPage(current)} size={`s`} />
        <Button label={current + 1} onClick={() => jumpToPage(current + 1)} size={`s`}/>
        <Button label={current + 2} onClick={() => jumpToPage(current + 2)} size={`s`}/>
        <Button label={lastPage} onClick={() => jumpToPage(lastPage)} size={`s`}/>
        <Button icon={`arrowForward`} onClick={pageUp} size={`s`}/>
      </div>
    </div>
  )
}

export default Paging

  