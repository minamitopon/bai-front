import { useMemo } from "react"
import Text from "@/components/primitive/Text/Text"
import Button from "@/components/primitive/Button/Button"
import styles from "@/components/primitive/Paging/paging.module.sass"

interface Props {
  current: number
  total: number
  last: number
  pageUp: () => void
  pageDown: () => void
  jumpToPage: (page: number) => void
}

const Paging = ({ current, total, last, pageUp, pageDown, jumpToPage }: Props) => {
  const currentPosition = useMemo(() => {
    return `Showing ${current * 10 - 9} to ${Math.min(current * 10, total)} of ${total} entries`
  }, [current, total])
  const isActive = (page: number) => { 
    return current === page
  }
  const pageNumbers = useMemo(() => {
    const pages: number[] = []
    
    if (current === 1) {
      for (let i = 0; i < 3; i++) {
        const page = current + i
        if (page <= last) pages.push(page)
      }
    } else if (current === last) {
      for (let i = 0; i < 3; i++) {
        const page = current - i
        if (page >= 1) pages.push(page)
      }
      pages.reverse()
    } else {
      for (let i = -1; i <= 1; i++) {
        const page = current + i
        if (page >= 1 && page <= last) pages.push(page)
      }
    }
    return pages
  }, [current, last])

  return (
    <div className={styles['paging']}>
      <Text text={currentPosition} />
      <div className={styles['paging__buttons']}>
        {current !== 1 && <Button icon={`arrowBack`} onClick={pageDown} size={`s`}/>}
        {pageNumbers.map(page => {
          return <Button label={page} isActive={isActive(page)} onClick={() => jumpToPage(page)} size={`s`}/>
        })}
        {current !== last && <Button icon={`arrowForward`} onClick={pageUp} size={`s`}/>}
      </div>
    </div>
  )
}

export default Paging

  