export interface Hand {
  spade: string
  heart: string
  diamond: string
  club: string
}

export interface SearchCondition {
  playerName: string
  teamName: string
  matchEventName: string
  hands: Hand,
  auction: Array<any>
}

export interface SearchResult {
  match: {
    id: number
    date: string
    name: string
    team_open: string
    team_close: string
  }
  match_progress: {
    id: number,
    uuid: string,
    round: string,
    start_board: number,
    last_board: number,
    imp_open: number,
    imp_close: number,
  }
  players: {
    north_open: string
    east_open: string
    south_open: string
    west_open: string
    north_close: string
    east_close: string
    south_close: string
    west_close: string
  }
}