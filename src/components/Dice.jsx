import { useState, useRef } from "react";

const Dice = ({ position, setPosition }) => {
  const [dice, setDice] = useState(0);
  const [turn, setTurn] = useState(false);
  // const [position, setPosition] = useState({ red: 0, yellow: 0 });
  const rollDice =  () => {
    let x = Math.floor(Math.random() * 6) + 1;
    setDice(x);

    if (turn === true) {
      let r = Number(position.red + dice);
      setPosition({ ...position, red: r });
    } else {
      let y = Number(position.yellow + dice);
      setPosition({ ...position, yellow: y });
    }
    // console.log(dice);
    setTurn(!turn);
  };

  return (
    <div className="w-[400px] h-[600px] flex flex-col justify-center items-center ">
      <h1
        className={
          turn
            ? "text-red-700 text-3xl font-extrabold"
            : "text-yellow-700 text-3xl font-extrabold"
        }
      >
        {turn ? "Red" : "Yellow"} Turn
      </h1>
      <h1 className="text-3xl">{dice}</h1>

      <button
        onClick={rollDice}
        className="bg-sky-500 px-8 py-1 my-4 text-2xl font-extrabold text-green-800"
      >
        ROLL
      </button>

      {/* <div className="w-[50px] h-[50px] rounded-full bg-yellow-500"></div>
      <div className="w-[50px] h-[50px] rounded-full bg-red-500"></div> */}
    </div>
  );
};

export default Dice;
