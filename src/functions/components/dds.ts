import type { Dds } from "bridge-dds"
import type { Hand } from "@/interfaces/pages/search"

export const strains = ["S", "H", "D", "C", "NT"] as const
export const directions = ["N", "E", "S", "W"] as const

export const toPbnHand = (hand: Hand) =>
  [hand.spade, hand.heart, hand.diamond, hand.club].join(".")

export const toPbn = (hands: Hand[]) =>
  `N:${hands.map(toPbnHand).join(" ")}`

let ddsPromise: Promise<Dds> | null = null
const getDds = () =>
  (ddsPromise ??= import("bridge-dds").then(async ({ Dds, loadDds }) => new Dds(await loadDds())))

export const analyseDeal = async (pbn: string): Promise<number[][]> => {
  const dds = await getDds()
  return dds.CalcDDTablePBN({ cards: pbn }).resTable
}