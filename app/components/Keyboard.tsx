import { useState } from 'react';
import { useKeymap } from '~/contexts/KeymapContext';
import { useEventListener } from '~/hooks/useEventListener';
import { useKeyboardLayout } from '~/hooks/useKeyboardLayout';

export default function Keyboard({ currentKey }: {currentKey: number}) {
  const keyboardLayout = useKeyboardLayout();
  const { primaryKeymap } = useKeymap() ?? {};
  const [keyDown, setKeyDown] = useState(0);

  useEventListener(
    'keydown',
    (e:  KeyboardEvent) => {
      setKeyDown(e.keyCode);
    },
    [],
  );

  useEventListener(
    'keyup',
    () => {
      setKeyDown(0);
    },
    [],
  );

  return (
    <div>
      {keyboardLayout.map((row, i) => (
        <div className={`flex flex-row ml-${i * 6}`} key={row.join('-')}>
          {row.map((keyCode) => (
            <div
              className={`w-10 h-10 m-1 p-1 text-white dark:text-black
                 ${
                   keyCode === keyDown
                     ? keyCode === currentKey
                       ? 'bg-correct'
                       : 'bg-incorrect'
                     : 'bg-black dark:bg-white'
                 }`}
              key={keyCode}
            >
              { primaryKeymap?.[keyCode] ?? '' }
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
