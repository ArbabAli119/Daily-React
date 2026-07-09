import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("beige");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-emerald-400 px-4 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-8 py-4 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-7 py-3 rounded-full text-black shadow-2xl"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-7 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-7 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-7 py-3 rounded-full text-black shadow-2xl"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-7 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("darkviolet")}
              className="outline-none px-7 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "darkviolet" }}
            >
              Dark Voilet
            </button>
            <button
              onClick={() => setColor("indigo")}
              className="outline-none px-7 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
            
             <button
              onClick={() => setColor("black")}
              className="outline-none px-7 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setColor("teal")}
              className="outline-none px-7 py-3 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "teal" }}
            >
              teal
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
