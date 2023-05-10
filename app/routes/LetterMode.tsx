import { useState } from 'react';
import Keyboard from '~/components/Keyboard';
import { useKeymap } from '~/contexts/KeymapContext';

function getRandKey(keyMap: any): any {
    const keys = Object.keys(keyMap);
    const key = keys[Math.floor(Math.random() * keys.length)];
    console.log(keyMap[key]);
    const regEx = /[~`!@#$%^&*(){}[\];:"'<,.>?/\\|_+=-]/g;
    const isPunctuation = regEx.test(keyMap[key]);
    console.log(isPunctuation);
    return parseInt(isPunctuation ? getRandKey(keyMap) : key, 10);
}

export default function LetterMode() {
    const { primaryKeymap, punctuation, setPunctuation } = useKeymap();
    const [currentKey, setCurrentKey] = useState(() =>
        getRandKey(primaryKeymap),
    );
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <div className="flex flex-col items-center justify-center w-96 h-96 bg-gray-800 rounded-xl">
                <h1 className="text-3xl font-bold text-white">Letter Mode</h1>
                <Keyboard currentKey={currentKey} />
            </div>
        </div>
    );
}
