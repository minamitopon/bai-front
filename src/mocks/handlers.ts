import { http, HttpResponse } from "msw"

import { matches } from "@/mocks/api/matches/get"
import type { SearchCondition } from "@/interfaces/pages/search"

import { hands } from "@/mocks/api/hand/get"
import { playlogs } from "@/mocks/api/playlogs/get"


export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ id: 1, name: 'Taro Yamada' })
  }),
  http.get('/api/matches', () => {
    return HttpResponse.json(matches)
  }),
  http.post('/api/search', async ({ request }) => {
    const condition = await request.json() as SearchCondition
    console.log('Received search condition:', condition)
    let results = matches
    
    if (condition.playerName) {
      results = results.filter((match) => {
        const column = ['north_open', 'east_open', 'south_open', 'west_open', 'north_close', 'east_close', 'south_close', 'west_close']
        // match.playersの各プロパティに対して、playerNameが含まれているかをチェック
        return column.some((key) => match.players[key as keyof typeof match.players]?.toString().toLowerCase().includes(condition.playerName.toLowerCase()))
      })
    }

    if (condition.teamName) {
      results = results.filter((match) => {
        const column = ['team_open', 'team_close']
        // match.matchの各プロパティに対して、teamNameが含まれているかをチェック
        return column.some((key) => match.match[key as keyof typeof match.match]?.toString().toLowerCase().includes(condition.teamName.toLowerCase()))
      })
    }

    if (condition.matchEventName) {
      results = results.filter((match) => {
        const column = ['name']
        // match.matchの各プロパティに対して、matchEventNameが含まれているかをチェック
        return column.some((key) => match.match[key as keyof typeof match.match]?.toString().toLowerCase().includes(condition.matchEventName.toLowerCase()))
      })
    }

    return HttpResponse.json(results)
  }),

  http.get('/api/board/:uuid/:boardNumber', ({ params }) => {
    const { uuid, boardNumber } = params;
    const hand = hands.find(h => h.uuid === uuid && h.board === Number(boardNumber))
    return HttpResponse.json(hand)
  }),

  http.get('/api/playlogs/:uuid/:boardNumber', ({ params }) => {
    const { uuid, boardNumber } = params;
    const matchedPlaylogs = playlogs.filter(p => p.uuid === uuid && p.board_number === boardNumber)
    return HttpResponse.json(matchedPlaylogs)
  })
];