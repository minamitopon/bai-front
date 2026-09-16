import { useState, type ReactNode } from "react"
import type { SearchCondition } from "@/interfaces/pages/search"
import { SearchContext } from "@/contexts/SearchContext"

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
  const [results, setResults] = useState<any[]>([])

  const findByCondition = (condition: SearchCondition) => {
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(condition)
    })
      .then(res => res.json())
      .then(data => {
        setResults(data)
      })
  }

  return (
    <SearchContext.Provider value={{ condition, results, setCondition, setResults, findByCondition }}>
      {children}
    </SearchContext.Provider>
  )
}

export default DataCenter