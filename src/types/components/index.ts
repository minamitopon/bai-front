import { SUIT, CALL_OPTION } from "@/types/components/enum";

export type Color =
  | "spade"
  | "heart"
  | "diamond"
  | "club"
  | "white"
  | "primary"
  | "secondary";
export type Size = "s" | "m" | "l" | "unlimited";
export type Weight = "normal" | "bold";
export type IconName =
  | "filter"
  | "arrowBack"
  | "arrowForward"
  | "spade"
  | "heart"
  | "diamond"
  | "club"
  | "hint";
export type Space = "xs" | "s" | "m" | "l" | "xl";
export type Align = "left" | "center" | "right";

export type Call = {
  id: number;
  rank: number;
  suit:
    | (typeof SUIT)[keyof typeof SUIT]
    | (typeof CALL_OPTION)[keyof typeof CALL_OPTION];
};
