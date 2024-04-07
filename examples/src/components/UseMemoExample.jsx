import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/utils";

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // to check the rendering
  console.log("Rendering");

  //const prime = findNthPrime(number); // --> This should be called only when the number changes
  // Unfortunately, since react will re render on any state changes, even if we toggle the dark mode,
  // still the prime number gets calculated every time. This is unnecessary and wasteful as dark mode
  // will not change the prime number
  // to solve this we can use useMemo hook, which will cache the result of the calculation

  let prime2 = useMemo(() => findNthPrime(number), [number]);

  return (
    <div
      className={`${
        isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-gray-900"
      } `}
    >
      <h1 className="p-2 text-center font-bold text-3xl">UseMemo Example</h1>
      <div className="flex gap-2 p-2 justify-center items-center">
        <input
          value={number}
          type="number"
          className="p-2 border-2 rounded border-green-200 outline-none"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 border-2 rounded border-green-200"
        >
          Toggle
        </button>
      </div>

      <div className={`p-2 rounded text-center font-bold text-3xl`}>
        {prime2}
      </div>
    </div>
  );
};

export default UseMemoExample;
