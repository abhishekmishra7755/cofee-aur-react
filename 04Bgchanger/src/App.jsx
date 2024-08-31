import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center
       bottom-12 inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center gap-3
         shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            Test
            <button
              className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setcolor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setcolor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setcolor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
              onClick={() => setcolor("olive")}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
              onClick={() => setcolor("grey")}
            >
              Grey
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setcolor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => setcolor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setcolor("purple")}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setcolor("lavender")}
            >
              Lavender
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => setcolor("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full
          text-black shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={() => setcolor("white")}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
