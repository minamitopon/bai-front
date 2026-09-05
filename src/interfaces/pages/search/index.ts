export interface SearchCondition {
  playerName: string
  teamName: string
  matchEventName: string
  hands: {
    spade: string
    heart: string
    diamond: string
    club: string
  },
  auction: Array<any>
}