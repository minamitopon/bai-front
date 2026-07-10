export const SUIT = {
  SPADE: "spade",
  HEART: "heart",
  DIAMOND: "diamond",
  CLUB: "club",
  NOTRUMP: "NT",
} as const satisfies Record<string, string>;

export const CALL_OPTION = {
  PASS: "P",
  DOUBLE: "X",
  REDOUBLE: "XX",
} as const satisfies Record<string, string>;
