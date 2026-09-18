import { useState, type ReactNode } from "react"
import type { SearchCondition } from "@/interfaces/pages/search"
import { SearchContext } from "@/contexts/SearchContext"
import type { SearchResult } from "@/interfaces/pages/search"

interface Props {
  children: ReactNode
}

const initialCondition: SearchCondition = {
  playerName: "",
  teamName: "",
  matchEventName: "",
  hands: {
    spade: "",
    heart: "",
    diamond: "",
    club: ""
  },
  auction: []
}

const DataCenter = ({ children }: Props) => {
  const [condition, setCondition] = useState<SearchCondition>(initialCondition)
  const [results, setResults] = useState<SearchResult[]>([])

  const findByCondition = async (condition: SearchCondition) => {
    const res = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(condition)
    })
    if (res.ok) {
      const data: SearchResult[] = await res.json()
      setCondition(condition)
      setResults(data)
    } else {
      throw new Error('fetch error')
    }
  }

  return (
    <SearchContext.Provider value={{ condition, results, setCondition, setResults, findByCondition }}>
      {children}
    </SearchContext.Provider>
  )
}

export default DataCenter