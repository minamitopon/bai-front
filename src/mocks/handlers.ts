import { http, HttpResponse } from "msw"

import { matches } from "@/mocks/api/matches/get"

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ id: 1, name: 'Taro Yamada' })
  }),
  http.get('/api/matches', () => {
    return HttpResponse.json(matches)
  }),
];