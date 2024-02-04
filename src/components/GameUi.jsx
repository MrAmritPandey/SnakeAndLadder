//import { useEffect } from "react";

const GameUi = ({ position }) => {
  let { red, yellow } = position;

  let left = 0 + "px";
  let bottom = 0 + "px";

  if (red !== 0) {
    if (red + 1 < 11) {
      bottom = red * 60 + "px";
      left = 0 + "px";
      console.log(bottom, left);
    }
    if (red + 1 > 11) {
      bottom = Math.floor(red / 10) + 1 * 60 + "px";
      left = (red % 10) * 60 + "px";
      console.log(bottom, left);
    }
  }

  const renderCell = () => {
    let cells = [];

    for (let i = 0; i < 10; i++) {
      let subarray = [];

      if (i % 2 == 0) {
        for (let j = 1; j <= 10; j++) {
          subarray.push(
            <div
              className="border relative w-[60px] h-[60px]"
              key={i * 10 + j}
              id={i * 10 + j}
            ></div>
          );
        }
        cells.unshift(subarray);
      }

      if (i % 2 !== 0) {
        for (let j = 1; j <= 10; j++) {
          subarray.unshift(
            <div
              className="border w-[60px] h-[60px]"
              key={i * 10 + j}
              id={i * 10 + j}
            >
              {/* <div className="w-[50px] h-[50px] rounded-full bg-yellow-500 absolute z-10"></div> */}
            </div>
          );
        }
        cells.unshift(subarray);
      }
    }
    cells = [].concat(...cells);

    return cells;
  };

  return (
    <div className="relative w-[600px] grid grid-cols-10">
      {renderCell()}
      <img
        src="src/assets/ui.png"
        className="w-[600px] aspect-square absolute"
      />
      <div
        className={
          "w-[50px] h-[50px] rounded-full bg-yellow-500 absolute bottom-[" +
          bottom +
          "] left-[" +
          left +
          "]"
        }
      ></div>
      <div
        className={
          "w-[50px] h-[50px] rounded-full bg-red-500 absolute bottom-[" +
          bottom +
          "] left-[" +
          left +
          "] "
        }
      ></div>
    </div>
  );
};

export default GameUi;
