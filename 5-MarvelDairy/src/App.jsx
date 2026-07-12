import { useState } from "react";
import './App.css'
import img1 from "./assets/1TonyDoom.jpg";
import img2 from "./assets/2TeamThor.jpg";
import img3 from "./assets/3Thor.png";
import img4 from "./assets/4BlackWidow.jpg";
import img5 from "./assets/5SpiderMan.jpg";
import img6 from "./assets/6IronMan.jpg";
import img7 from "./assets/7Captain.jpg";
import img8 from "./assets/8Wanda.jpg";
import img9 from "./assets/9Ladythor.jpg";
import img10 from "./assets/10F4.jpg";
import img11 from "./assets/11DrStrange.jpg";
import img12 from "./assets/12Panther.jpg";
import img13 from "./assets/13Wolvarine.jpg";


function App() {
  const [image, setImage] = useState(img1);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-teal-300 px-4 py-6 gap-5">

    <div className="w-full max-w-9xl h-[80vh] border-4 rounded-xl overflow-hidden shadow-xl">
        <img
          src={image}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      </div>

          <div className="w-full flex flex-wrap justify-center gap-2 px-4">
          <button
          onClick={() => setImage(img1)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg "
        >
          Tony Vs Doom
        </button>

        <button
          onClick={() => setImage(img2)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Team Thor
        </button>

        <button
          onClick={() => setImage(img3)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Thor
        </button>
      
        <button
          onClick={() => setImage(img4)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          Black Widow
        </button>
        <button
          onClick={() => setImage(img5)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Spider Man
        </button>
        <button
          onClick={() => setImage(img6)}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg"
        >
          Iron Man
        </button>
       
        <button
          onClick={() => setImage(img7)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Captain
        </button>
        <button
          onClick={() => setImage(img8)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Wanda
        </button>
        <button
          onClick={() => setImage(img9)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          Miss Thor
        </button>
        <button
          onClick={() => setImage(img10)}
          className="bg-fuchsia-900 text-white px-4 py-2 rounded-lg"
        >
          Fantastic Four
        </button>
        <button
          onClick={() => setImage(img11)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Dr Strange
        </button>
        <button
          onClick={() => setImage(img12)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Black Panther
        </button>
         <button
          onClick={() => setImage(img13)}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg"
        >
          Wolvarine
        </button>

      </div>

    </div>
  );
}

export default App;