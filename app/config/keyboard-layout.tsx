export const KEYBOARD_LAYOUT = [
  [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
  [65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222],
  [90, 88, 67, 86, 66, 78, 77, 188, 190, 191],
] as const;

export const MAC_LAYOUT = [
  [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221],
  [65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222],
  [90, 88, 67, 86, 66, 78, 77, 188, 190, 191],
];

export type KnownKeyCodes =
  | typeof KEYBOARD_LAYOUT[number][number]
  | typeof MAC_LAYOUT[number][number];
