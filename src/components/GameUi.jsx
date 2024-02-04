const GameUi = ({ position }) => {
  let { red, yellow } = position;
  let left;
  let bottom;

  let RedStyle = {
    backgroundColor: "red",
    position: "absolute",
    bottom: -60,
    left: 40,
  };

  let YellowStyle = {
    backgroundColor: "yellow",
    position: "absolute",
    bottom: -60,
    left: 10,
  };

  // for red small than 10
  if (red <= 10 && red > 0) {
    bottom = 0;
    left = (red - 1) * 60;
    RedStyle = { ...RedStyle, bottom, left };
  }

  //for yellow small than 10
  if (yellow <= 10 && yellow > 0) {
    bottom = 0;
    left = (yellow - 1) * 60;
    YellowStyle = { ...YellowStyle, bottom, left };
  }

  //for red big(red > 10)
  if (red > 10) {
    red = red - 1;
    bottom = Math.floor(red / 10) * 60;
    let x = Math.floor(red / 10); //return which floor is this

    if (x % 2 == 0) {
      //even floor
      left = (red - x * 10) * 60;
    } else {
      //odd floor
      left = 600 - (red + 1 - x * 10) * 60;
    }

    RedStyle = { ...RedStyle, bottom: bottom, left: left };
  }

  if (yellow > 10) {
    yellow = yellow - 1;
    bottom = Math.floor(yellow / 10) * 60;
    let x = Math.floor(yellow / 10); //return which floor is this

    if (x % 2 == 0) {
      //even floor
      left = (yellow - x * 10) * 60;
    } else {
      //odd floor
      left = 600 - (yellow + 1 - x * 10) * 60;
    }

    YellowStyle = { ...YellowStyle, bottom: bottom, left: left };
  }

  //if no dice is rolled
  if (red == 0) {
    RedStyle = { ...RedStyle };
  }

  if (yellow == 0) {
    YellowStyle = { ...YellowStyle };
  }

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
        className="w-[50px] h-[50px] rounded-full z-10"
        style={YellowStyle}
      ></div>
      <div
        className="w-[50px] h-[50px] rounded-full z-20"
        style={RedStyle}
      ></div>
    </div>
  );
};

export default GameUi;
