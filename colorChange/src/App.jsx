import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const handleColorChange = (e) => {
    console.log(e.target);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2   bg-white">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2  rounded-full"
          style={{ backgroundColor: "red" }}
        >
          <button
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2  rounded-full"
          style={{ backgroundColor: "blue" }}
        >
          <button
            onClick={() => {
              setColor("blue");
            }}
          >
            blue
          </button>
        </div>
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2  rounded-full"
          style={{ backgroundColor: "green" }}
        >
          <button
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
