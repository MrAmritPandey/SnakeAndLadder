import { useState } from "react";
import GameUi from "./components/GameUi";
import Dice from "./components/Dice";

function App() {
  const [position, setPosition] = useState({ green: 0, blue: 0 });

  return (
    <main className="min-h-screen w-full">
      <div className="lg:laptop sm:tablet mobile">
        <Dice position={position} setPosition={setPosition} />
        <GameUi position={position} setPosition={setPosition} />
      </div>
    </main>
  );
}

export default App;
