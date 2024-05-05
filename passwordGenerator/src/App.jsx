import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [len, setLength] = useState(8);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "";
    let pass = "";

    if (upperCase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCase) str += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "1234567890";
    if (characters) str += "!@#$%^&*()-_=+|[]{};:/?.>";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    if (str === "") {
      alert("Please select anyone checkbox to Generate Password");
      return false;
    }
    setPassword(pass);
    return true;
  }, [upperCase, lowerCase, numbers, characters, len, setPassword]);

  const copyToClipBoard = () => {
    if (password !== "") {
      window.navigator.clipboard.writeText(password);
      alert("Password Copied to Clipboard");
    }
  };

  return (
    <>
      <div className="text-center text-white bg-slate-800 max-w-lg p-10 rounded-lg mx-auto mt-6 flex justify-start items-start flex-col gap-4">
        <h1 className="text-4xl">Password Generator</h1>
        <div className="area">
          <div className="inputArea">
            <input
              type="text"
              value={password}
              placeholder="Generated Password..."
              readOnly
              className="bg-slate-300 rounded-lg p-2 my-4 mx-2"
            />
            <button
              className="bg-blue-500 rounded-lg p-2 my-4"
              onClick={passwordGenerator}
            >
              Generate Password
            </button>
          </div>
          <div className="fields flex flex-col gap-4">
            <div className="fieldsChild  flex justify-start">
              <input
                type="range"
                min={8}
                max={30}
                value={len}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <span className="mx-2">Length ({len})</span>
            </div>
            <div className="fieldsChild flex justify-start">
              <input
                type="checkbox"
                defaultChecked={upperCase}
                onChange={() => setUpperCase((prev) => !prev)}
              />
              <span className="mx-2">Include upper case</span>
            </div>
            <div className="fieldsChild flex justify-start">
              <input
                type="checkbox"
                defaultChecked={lowerCase}
                onChange={() => setLowerCase((prev) => !prev)}
              />
              <span className="mx-2">Include Lower Case</span>
            </div>
            <div className="fieldsChild flex justify-start">
              <input
                type="checkbox"
                defaultChecked={numbers}
                onChange={() => setNumbers((prev) => !prev)}
              />
              <span className="mx-2">Include Numbers</span>
            </div>
            <div className="fieldsChild flex justify-start">
              <input
                type="checkbox"
                defaultChecked={characters}
                onChange={() => setCharacters((prev) => !prev)}
              />
              <span className="mx-2">Include Symbols</span>
            </div>
          </div>
        </div>

        <div className="copy bg-blue-500 rounded-lg p-2 my-4 cursor-copy">
          <button
            ref={passwordRef}
            onClick={copyToClipBoard}
            className="cursor-copy"
          >
            COPY Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
