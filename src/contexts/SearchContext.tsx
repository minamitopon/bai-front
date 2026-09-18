import { createContext, useContext } from "react"
import type { SearchCondition, SearchResult } from "@/interfaces/pages/search"

export interface SearchContextType {
  condition: SearchCondition
  results: SearchResult[]
  setCondition: (condition: SearchCondition) => void
  setResults: (results: SearchResult[]) => void
  findByCondition: (condition: SearchCondition) => Promise<void>
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a Search DataCenter")
  }
  return context
}