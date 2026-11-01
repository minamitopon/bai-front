import { createContext, useContext } from "react"
import type { Board, Playlog } from "@/interfaces/pages/board"

export interface BoardContextType {
  board: Board | null
  setBoard: (board: Board | null) => void
  findBoard: (uuid: string, boardNumber: number) => Promise<void>
  playlogs: Playlog[]
  setPlaylogs: (playlogs: Playlog[]) => void
  findPlaylogs: (uuid: string, boardNumber: number) => Promise<void>
}

export const BoardContext = createContext<BoardContextType | undefined>(undefined)

export const useBoardContext = () => {
  const context = useContext(BoardContext)
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider")
  }
  return context
}