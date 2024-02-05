import { useState, useRef } from "react";

const Dice = ({ position, setPosition }) => {
  const [dice, setDice] = useState(0);
  const [turn, setTurn] = useState(false);

  const rollDice = () => {
    let x = Math.floor(Math.random() * 6) + 1;
    setDice(x);

    if (turn === true) {
      //require 6 to unlock
      if (position.green === 0 && dice === 6) {
        let y = Number(position.green + dice);
        setPosition({ ...position, green: y });
      }

      if (position.green !== 0) {
        if (position.green + dice <= 100) {
          let r = Number(position.green + dice);
          setPosition({ ...position, green: r });
        }
      }
    } else {
      //require 6 to unlock
      if (position.blue === 0 && dice === 6) {
        let y = Number(position.blue + dice);
        setPosition({ ...position, blue: y });
      }

      if (position.blue !== 0) {
        if (position.blue + dice <= 100) {
          let y = Number(position.blue + dice);
          setPosition({ ...position, blue: y });
        }
      }
    }
    setTurn(!turn);
  };

  return (
    <div className="lg:laptopDice sm:tabletDice mobileDice">
      <div className="flex flex-col items-center">
        <h1
          className={
            turn
              ? "text-3xl font-extrabold text-green-800"
              : "text-3xl font-extrabold text-blue-700"
          }
        >
          {turn ? "Green Turn" : "Blue Turn"}
        </h1>
        <h1 className="text-3xl">{dice}</h1>
      </div>
      <button
        onClick={rollDice}
        className="bg-sky-500 px-8 py-1 my-4 text-2xl font-extrabold text-green-800"
      >
        ROLL
      </button>
      <div className="flex flex-col justify-start">
        <p>Green: {position.green}</p>
        <p>Blue: {position.blue}</p>
      </div>

      {/* <div className="w-[50px] h-[50px] rounded-full bg-blue-500"></div>
      <div className="w-[50px] h-[50px] rounded-full bg--500"></div> */}
    </div>
  );
};

export default Dice;
