import { useEffect, useState, type ReactNode } from "react"
import { MatchesContext } from "@/contexts/MatchesContext"

interface Props {
  children: ReactNode
}

const DataCenter = ({ children }: Props) => {
  const [matches, setMatches] = useState<any[]>([])
  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(data => setMatches(data))
  }, [])

  return (
    <MatchesContext.Provider value={{ matches }}>
      {children}
    </MatchesContext.Provider>
  )
}

export default DataCenter