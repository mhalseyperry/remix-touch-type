import { useEffect, useState } from "react";
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

  // if (isNaN(key)) return getRandKey(keyMap);

  // console.log({ key: keyMap[key] });

  const regEx = /[~`!@#$%^&*(){}[\];:"'<,.>?/\\|_+=-]/g;
  const isPunctuation = regEx.test(keyMap[key]);

  // console.log({ isPunctuation });

  return parseInt(isPunctuation ? getRandKey(keyMap) : key, 10);
}

export default function LetterMode() {
  const { primaryKeymap } = useKeymap();
  const [currentKey, setCurrentKey] = useState(() => getRandKey(primaryKeymap));
  const [futureKey, setFutureKey] = useState(() => getRandKey(primaryKeymap));
  const [pastKey, setPastKey] = useState(() => getRandKey(primaryKeymap));

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      console.log(
        "keycode is " +
          primaryKeymap[e.keyCode] +
          " and current key is " +
          primaryKeymap[currentKey] +
          " and future key is " +
          primaryKeymap[futureKey] +
          " and past key is " +
          primaryKeymap[pastKey]
      );
      if (e.keyCode === currentKey) {
        setCurrentKey(futureKey);
        setFutureKey(getRandKey(primaryKeymap));
        setPastKey(currentKey);
      }
    };

    document.addEventListener("keyup", handleKeyUp);
  }, [currentKey, primaryKeymap, pastKey, futureKey]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative flex flex-row justify-around max-w-3xl text-center items-center">
        <div className="z-10 opacity-50ml-20">
          <p className="text-7xl text-black">{primaryKeymap[pastKey]}</p>
        </div>
        <div className="z-10">
          <p className={"text-9xl text-black "}>{primaryKeymap[currentKey]}</p>
        </div>
        <div className="z-10 opacity-50">
          <p className="text-7xl text-black ">{primaryKeymap[futureKey]}</p>
        </div>
      </div>
      <Keyboard currentKey={currentKey} />
    </div>
  );
}
