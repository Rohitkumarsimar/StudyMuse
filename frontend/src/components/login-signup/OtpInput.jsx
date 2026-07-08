import {useRef, useState } from "react";

export default function OtpInput({ length = 6, onChange, error }) {
  const [digits, setDigits] = useState(Array(length).fill(""));
const inputRefs = useRef([])
  function handleChange(e, index) {
    const value = e.target.value;

    // Allow only numbers
    if (!/^\d?$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value;

    setDigits(newDigits);
    if (value && index < length - 1) {
  inputRefs.current[index + 1]?.focus();
}

    // Send complete OTP to parent
    onChange(newDigits.join(""));
  }

  // backspace function
  function handleKeyDown(e, index) {
  if (
    e.key === "Backspace" &&
    digits[index] === "" &&
    index > 0
  ) {
    inputRefs.current[index - 1]?.focus();
  }
}

function handlePaste(e) {
  e.preventDefault();

  const pasted = e.clipboardData.getData("text").trim();

  // Allow only digits
  if (!/^\d+$/.test(pasted)) return;

  const pastedDigits = pasted.slice(0, length).split("");

  const newDigits = [...digits];

  pastedDigits.forEach((digit, index) => {
    newDigits[index] = digit;
  });

  setDigits(newDigits);
  onChange(newDigits.join(""));

  // Focus the last filled input
  const lastIndex = Math.min(pastedDigits.length, length) - 1;
  inputRefs.current[lastIndex]?.focus();
}

  return (
    <div className="flex flex-col gap-4 items-center">
    <div className="flex gap-2 justify-center">
      {digits.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          ref={(el) => (inputRefs.current[index] = el)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste = {handlePaste}
          onChange={(e) => handleChange(e, index)}
          className="w-12 h-12 border rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ))}
      </div>
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}