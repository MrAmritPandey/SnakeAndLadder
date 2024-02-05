const GameUi = ({ position, setPosition }) => {
  let { green, blue } = position;
  let left;
  let bottom;

  const ladder = {
    1: 38,
    4: 14,
    8: 30,
    21: 42,
    28: 76,
    50: 67,
    80: 99,
    71: 92,
  };

  const snake = {
    36: 6,
    32: 10,
    48: 26,
    62: 18,
    88: 24,
    95: 56,
    97: 78,
  };

  let greenStyle = {
    backgroundColor: "green",
    position: "absolute",
    bottom: -60,
    left: 40,
  };

  let blueStyle = {
    backgroundColor: "blue",
    position: "absolute",
    bottom: -60,
    left: 10,
  };

  // for green small than 10
  if (green <= 10 && green > 0) {
    bottom = 0;
    left = (green - 1) * 60;
    greenStyle = { ...greenStyle, bottom, left };
    if (ladder[green] !== undefined) {
      setPosition({ ...position, green: ladder[green] });
    }
  }

  //for blue small than 10
  if (blue <= 10 && blue > 0) {
    bottom = 0;
    left = (blue - 1) * 60;
    blueStyle = { ...blueStyle, bottom, left };
    if (ladder[blue] !== undefined) {
      setPosition({ ...position, blue: ladder[blue] });
    }
  }

  //for green big(green > 10)
  if (green > 10) {
    green = green - 1;
    bottom = Math.floor(green / 10) * 60;
    let x = Math.floor(green / 10); //return which floor is this

    if (x % 2 == 0) {
      //even floor
      left = (green - x * 10) * 60;
    } else {
      //odd floor
      left = 600 - (green + 1 - x * 10) * 60;
    }

    greenStyle = { ...greenStyle, bottom: bottom, left: left };
    //for ladder
    if (ladder[green + 1] !== undefined) {
      setPosition({ ...position, green: ladder[green + 1] });
    }
    //for snake
    if (snake[green + 1] !== undefined) {
      setPosition({ ...position, green: snake[green + 1] });
    }
    //for won
    if (green + 1 == 100) {
      alert("green won");
      setPosition({ green: 0, blue: 0 });
    };
  };
  

  if (blue > 10) {
    blue = blue - 1;
    bottom = Math.floor(blue / 10) * 60;
    let x = Math.floor(blue / 10); //return which floor is this

    if (x % 2 == 0) {
      //even floor
      left = (blue - x * 10) * 60;
    } else {
      //odd floor
      left = 600 - (blue + 1 - x * 10) * 60;
    }

    blueStyle = { ...blueStyle, bottom: bottom, left: left };
    //for ladder
    if (ladder[blue + 1] !== undefined) {
      setPosition({ ...position, blue: ladder[blue + 1] });
    }
    //for snake
    if (snake[blue + 1] !== undefined) {
      setPosition({ ...position, blue: snake[blue + 1] });
    }
    //for won
    if (blue + 1 == 100) {
      alert("blue won");
      setPosition({ green: 0, blue: 0 });
    };
  }

  //if no dice is rolled
  if (green == 0) {
    greenStyle = { ...greenStyle };
  }

  if (blue == 0) {
    blueStyle = { ...blueStyle };
  }

  //for ladder

  const renderCell = () => {
    let cells = [];

    for (let i = 0; i < 10; i++) {
      let subarray = [];

      if (i % 2 == 0) {
        for (let j = 1; j <= 10; j++) {
          subarray.push(
            <div
              className="border w-[60px] h-[60px]"
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
              {/* <div className="w-[50px] h-[50px] rounded-full bg-blue-500 absolute z-10"></div> */}
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
        src="ui.png"
        className="w-[380px] sm:w-[600px] aspect-square absolute"
      />
      <div
        className="diceSize z-10"
        style={blueStyle}
      ></div>
      <div
        className="diceSize z-20"
        style={greenStyle}
      ></div>
    </div>
  );
};

export default GameUi;
