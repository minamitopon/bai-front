import { useCallback, useState, type ReactNode } from "react"
import type { Board, Playlog } from "@/interfaces/pages/board"
import { BoardContext } from "@/contexts/BoardContext"

interface Props {
  children: ReactNode
}

const DataCenter = ({ children }: Props) => {
  const [board, setBoard] = useState<Board | null>(null)
  const [playlogs, setPlaylogs] = useState<Playlog[]>([])

  const findBoard = useCallback(async (uuid: string, boardNumber: number) => {
    const res = await fetch(`/api/board/${uuid}/${boardNumber}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch board: ${res.status} ${res.statusText}`)
    }

    const data: Board = await res.json()
    setBoard(data)
  }, [])

  const findPlaylogs = useCallback(async (uuid: string, boardNumber: number) => {
    const res = await fetch(`/api/playlogs/${uuid}/${boardNumber}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch playlogs: ${res.status} ${res.statusText}`)
    }

    const data: Playlog[] = await res.json()
    setPlaylogs(data)
  }, [])

  return (
    <BoardContext.Provider value={{ board, setBoard, findBoard, playlogs, setPlaylogs, findPlaylogs }}>
      {children}
    </BoardContext.Provider>
  )
}

export default DataCenter