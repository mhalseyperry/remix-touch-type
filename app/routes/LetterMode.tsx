import { useState } from "react";
import Keyboard from "~/components/Keyboard";
import type { KnownKeyCodes } from "~/config/keyboard-layout";
import type { Keymap } from "~/config/keymaps";
import { useKeymap } from "~/contexts/KeymapContext";

function getRandKey(keyMap: Keymap): any {
  const keys = Object.keys(keyMap);
  const key = parseInt(
    keys[Math.floor(Math.random() * keys.length)],
    10
  ) as KnownKeyCodes;

  if (isNaN(key)) return getRandKey(keyMap);

  console.log({ key: keyMap[key] });

  const regEx = /[~`!@#$%^&*(){}[\];:"'<,.>?/\\|_+=-]/g;
  const isPunctuation = regEx.test(keyMap[key]);

  console.log({ isPunctuation });

  return parseInt(isPunctuation ? getRandKey(keyMap) : key, 10);
}

export default function LetterMode() {
  const { primaryKeymap } = useKeymap();
  const [currentKey] = useState(() => getRandKey(primaryKeymap));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white">Letter Mode</h1>
        <Keyboard currentKey={currentKey} />
      </div>
    </div>
  );
}
