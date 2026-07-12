import { useState, useEffect, useRef, useCallback } from "react";

function App2() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+-={}[]<>?";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const getStrength = () => {
    let score = 0;

    if (length >= 8) score++;
    if (length >= 12) score++;
    if (numberAllowed) score++;
    if (charAllowed) score++;

    if (score <= 1)
      return {
        text: "Weak",
        color: "bg-red-500",
        width: "w-1/4",
      };

    if (score === 2)
      return {
        text: "Medium",
        color: "bg-yellow-400",
        width: "w-2/4",
      };

    if (score === 3)
      return {
        text: "Strong",
        color: "bg-blue-500",
        width: "w-3/4",
      };

    return {
      text: "Very Strong",
      color: "bg-green-500",
      width: "w-full",
    };
  };

  const strength = getStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 flex items-center justify-center p-5">

      <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8">

        <h1 className="text-4xl font-bold text-center text-white">
          🔐 Password Generator
        </h1>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Create secure passwords in one click
        </p>

        {/* Password */}

        <div className="flex rounded-2xl overflow-hidden border border-gray-600">

          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            value={password}
            readOnly
            className="flex-1 bg-slate-900 text-green-400 font-mono text-lg px-4 py-4 outline-none"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="px-5 bg-slate-800 hover:bg-slate-700 text-white duration-300"
          >
            {showPassword ? "🙈" : "👁"}
          </button>

          <button
            onClick={copyPassword}
            className={`px-6 text-white font-semibold duration-300 ${
              copied
                ? "bg-green-600"
                : "bg-cyan-600 hover:bg-cyan-500"
            }`}
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>

        </div>

        <div className="mt-6">

          <div className="flex justify-between text-white mb-2">

            <span>Password Strength</span>

            <span>{strength.text}</span>

          </div>

          <div className="h-3 rounded-full bg-gray-700 overflow-hidden">

            <div
              className={`h-full ${strength.width} ${strength.color} duration-500`}
            ></div>

          </div>

        </div>

        <div className="mt-8">

          <div className="flex justify-between text-white mb-3">

            <span>Password Length</span>

            <span className="font-bold text-cyan-400">
              {length}
            </span>

          </div>

          <input
            type="range"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />

        </div>

                {/* Options */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <label className="flex items-center justify-between bg-slate-800/60 rounded-xl px-4 py-3 text-white cursor-pointer hover:bg-slate-700/70 transition">

            <span>🔢 Include Numbers</span>

            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-5 h-5 accent-cyan-500 cursor-pointer"
            />

          </label>

          <label className="flex items-center justify-between bg-slate-800/60 rounded-xl px-4 py-3 text-white cursor-pointer hover:bg-slate-700/70 transition">

            <span>✨ Include Symbols</span>

            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-5 h-5 accent-cyan-500 cursor-pointer"
            />

          </label>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <button
            onClick={generatePassword}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 text-white font-bold transition-all duration-300"
          >
            🎲 Generate Password
          </button>

          <button
            onClick={() => {
              setLength(12);
              setNumberAllowed(true);
              setCharAllowed(true);
            }}
            className="px-6 rounded-2xl border border-gray-500 text-white hover:bg-white/10 transition-all duration-300"
          >
            Reset
          </button>

        </div>

        {/* Footer */}

        <p className="text-center text-gray-400 text-sm mt-8">
          Made with ❤️ using React & Tailwind CSS
        </p>

      </div>

    </div>
  );
}

export default App2;