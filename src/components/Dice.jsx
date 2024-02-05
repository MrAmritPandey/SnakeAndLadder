import { useState, useRef } from "react";

const Dice = ({ position, setPosition }) => {
  const [dice, setDice] = useState(0);
  const [turn, setTurn] = useState(false);

  const rollDice = () => {
    let x = Math.floor(Math.random() * 6) + 1;
    setDice(x);

    if (turn === true) {
      if (position.green + dice <= 100) {
        let r = Number(position.green + dice);
        setPosition({ ...position, green: r });
      }
    } else {
      if (position.blue + dice <= 100) {
        let y = Number(position.blue + dice);
        setPosition({ ...position, blue: y });
      }
    }
    setTurn(!turn);
  };

  return (
    <div className="w-[400px] h-[600px] flex flex-col justify-center items-center ">
      <h1 className={turn ? "text-3xl font-extrabold text-green-800" : "text-3xl font-extrabold text-blue-700"}>
        {turn ? "Green Turn" : "Blue Turn"}
      </h1>
      <h1 className="text-3xl">{dice}</h1>

      <button
        onClick={rollDice}
        className="bg-sky-500 px-8 py-1 my-4 text-2xl font-extrabold text-green-800"
      >
        ROLL
      </button>

      <p>Green: {position.green}</p>
      <p>Blue: {position.blue}</p>

      {/* <div className="w-[50px] h-[50px] rounded-full bg-blue-500"></div>
      <div className="w-[50px] h-[50px] rounded-full bg--500"></div> */}
    </div>
  );
};

export default Dice;
