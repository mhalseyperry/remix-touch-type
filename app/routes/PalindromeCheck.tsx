import { useState } from "react";

export default function PalindromeCheck() {
  const [input, setInput] = useState("");
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  const checkPalindrome = (e: React.FormEvent) => {
    e.preventDefault();

    const reversed = input.split("").reverse().join("");
    if (input === reversed) {
      setIsPalindrome(true);
    } else {
      setIsPalindrome(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center w-96 h-96 bg-gray-800 rounded-xl">
        <h1 className="text-3xl font-bold text-white">Palindrome Checker</h1>
        <form onSubmit={checkPalindrome} className="w-80">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-80 h-10 mt-5 p-2 text-black bg-gray-200 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-80 h-10 mt-5 text-white bg-blue-500 rounded-md"
          >
            Check
          </button>
        </form>
        <div
          className={`mt-5 text-lg font-semibold transition-all duration-300 ${
            isPalindrome === null
              ? "opacity-0"
              : isPalindrome
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {isPalindrome
            ? "Yes, it is a palindrome"
            : "No, it is not a palindrome"}
        </div>
      </div>
    </div>
  );
}
