import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "sanjeev",
    age: "38",
  };
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">tailwind test </h1>
      <div class="mx-auto max-w-7xl px-2 lg:px-0"></div>
      <Card userName="chaiorcode" userDetails={myObj} />
      <Card userName="sanjeev sharma" />
    </>
  );
}

export default App;
