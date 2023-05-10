import React, { createContext, useContext, useState } from "react";
import type { Keymap, KeymapKey, Keymaps } from "~/config/keymaps";
import { KEYMAPS } from "~/config/keymaps";

interface KeymapContextValue {
  keymaps: Keymaps;

  primaryKeymapKey: string;

  primaryKeymap: Keymap;
  setPrimaryKeymap: (value: KeymapKey) => void;

  punctuation: boolean;
  setPunctuation: (value: boolean) => void;
}

const KeymapContext = createContext<KeymapContextValue>(
  {} as KeymapContextValue
);

export const useKeymap = () => useContext(KeymapContext);

type KeymapProviderProps = {
  children: React.ReactNode;
};

export function KeymapProvider({ children }: KeymapProviderProps) {
  const [primaryKeymap, setPrimaryKeymap] = useState<KeymapKey>("RUSSIAN");
  const [punctuation, setPunctuation] = useState(true);

  return (
    <KeymapContext.Provider
      value={{
        keymaps: KEYMAPS,

        primaryKeymapKey: primaryKeymap,
        primaryKeymap: KEYMAPS[primaryKeymap],

        punctuation: punctuation,

        setPunctuation,
        setPrimaryKeymap,
      }}
    >
      {children}
    </KeymapContext.Provider>
  );
}
