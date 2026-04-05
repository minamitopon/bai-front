import { createContext } from "react"

export interface MatchesContextType {
  matches: any[]
}

export const MatchesContext = createContext<MatchesContextType | undefined>(undefined)
