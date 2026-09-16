import { createContext } from "react"
import type { SearchCondition } from "@/interfaces/pages/search"

export interface SearchContextType {
  condition: SearchCondition
  results: any[]
  setCondition: (condition: SearchCondition) => void
  setResults: (results: any[]) => void
  findByCondition: (condition: SearchCondition) => void
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)