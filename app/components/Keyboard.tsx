import { useEffect, useState } from "react";
import { useKeymap } from "~/contexts/KeymapContext";
import { KEYBOARD_LAYOUT } from "~/config/keyboard-layout";

export default function Keyboard({ currentKey }: { currentKey: number }) {
  const { primaryKeymap } = useKeymap() ?? {};
  const [keyDown, setKeyDown] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyDown(e.keyCode);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleKeyUp = () => {
      setKeyDown(null);
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => document.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <div>
      {KEYBOARD_LAYOUT.map((row, i) => (
        <div className={`flex flex-row ml-${i * 6}`} key={row.join("-")}>
          {row.map((keyCode) => (
            <div
              className={`w-10 h-10 m-1 p-1 text-white dark:text-black
                 ${
                   keyCode === keyDown
                     ? keyCode === currentKey
                       ? "bg-correct"
                       : "bg-incorrect"
                     : "bg-black dark:bg-white"
                 }`}
              key={keyCode}
            >
              {primaryKeymap?.[keyCode] ?? ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
