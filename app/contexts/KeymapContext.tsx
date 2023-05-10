import React, { createContext, useContext, useState } from 'react';
import { useKeymaps } from '../hooks/useKeymaps';

interface KeymapContextValue {
    keymaps: { [key: string]: any };

    primaryKeymapKey: string;
    primaryKeymap: { [key: string]: string };

    punctuation: boolean;

    setPunctuation: (value: boolean) => void;
    setPrimaryKeymap: (value: string) => void;
}
const keymaps = useKeymaps();

const KeymapContext = createContext<KeymapContextValue>({
    keymaps: keymaps,
    primaryKeymapKey: 'Russian',
    primaryKeymap: keymaps['Russian'],
    punctuation: false,
    setPunctuation: () => {},
    setPrimaryKeymap: () => {},
});

export const useKeymap = () => useContext(KeymapContext);

export const KeymapProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}) => {
    const [primaryKeymap, setPrimaryKeymap] = useState('Russian');

    const [punctuation, setPunctuation] = useState(true);

    const value = {
        keymaps,

        primaryKeymapKey: primaryKeymap,
        primaryKeymap: (keymaps as { [key: string]: any })[primaryKeymap],

        punctuation: punctuation,

        setPunctuation,
        setPrimaryKeymap,
    };

    return (
        <KeymapContext.Provider value={value}>
            {children}
        </KeymapContext.Provider>
    );
};
