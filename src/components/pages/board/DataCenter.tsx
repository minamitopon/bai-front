import { useCallback, useState, type ReactNode } from "react"
import type { Board } from "@/interfaces/pages/board"
import { BoardContext } from "@/contexts/BoardContext"

interface Props {
  children: ReactNode
}

const DataCenter = ({ children }: Props) => {
  const [board, setBoard] = useState<Board | null>(null)

  const find = useCallback(async (uuid: string, boardNumber: number) => {
    const res = await fetch(`/api/board/${uuid}/${boardNumber}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch board: ${res.status} ${res.statusText}`)
    }

    const data: Board = await res.json()
    setBoard(data)
  }, [])

  return (
    <BoardContext.Provider value={{ board, setBoard, find }}>
      {children}
    </BoardContext.Provider>
  )
}

export default DataCenter