import type { KnownKeyCodes } from "~/config/keyboard-layout";
import { ENGLISH } from "./keymaps/english";
import { ENGLISH_DVORAK } from "./keymaps/english-dvorak";
import { RUSSIAN } from "./keymaps/russian";

export type Keymap = Record<KnownKeyCodes, string>;

export const KEYMAPS = {
  RUSSIAN,
  ENGLISH,
  ENGLISH_DVORAK,
};

export type Keymaps = typeof KEYMAPS;

export type KeymapKey = keyof Keymaps;
