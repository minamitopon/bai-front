import { createContext, useContext } from "react"
import type { Board } from "@/interfaces/pages/board"

export interface BoardContextType {
  board: Board | null
  setBoard: (board: Board | null) => void
  find: (uuid: string, boardNumber: number) => Promise<void>
}

export const BoardContext = createContext<BoardContextType | undefined>(undefined)

export const useBoardContext = () => {
  const context = useContext(BoardContext)
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider")
  }
  return context
}