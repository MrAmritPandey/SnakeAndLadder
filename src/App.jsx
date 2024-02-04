import { useState } from "react";
import GameUi from "./components/GameUi";
import Dice from "./components/Dice";

function App() {
  const [position, setPosition] = useState({ red: 0, yellow: 0 });
  return (
    <main className="min-h-screen w-full">
      <div className="w-full h-screen flex justify-center items-center">
        <Dice position={position} setPosition={setPosition} />
        <GameUi position={position}/>
      </div>
    </main>
  );
}

export default App;
