import "./BubblePop.css";

const BubblePop = ({ id, top, left, randomInt, deletePopElement }) => {
  const positionArray = [];
  const sizeArray = [];
  const durationArray = [];

  for (let i = 0; i < 3; i++) {
    sizeArray.push(`${randomInt(1, 5)}rem`);
    durationArray.push(`${randomInt(5, 20) / 10}s`);
  }

  for (let i = 0; i < 6; i++) {
    positionArray.push(`${randomInt(-10, 10)}rem`);
  }

  return (
    <div
      style={{
        "--bubble-pop-first-x": positionArray[0],
        "--bubble-pop-first-y": positionArray[1],
        "--bubble-pop-first-size": sizeArray[0],
        "--bubble-pop-first-duration": durationArray[0],

        "--bubble-pop-second-x": positionArray[2],
        "--bubble-pop-second-y": positionArray[3],
        "--bubble-pop-second-size": sizeArray[1],
        "--bubble-pop-second-duration": durationArray[1],

        "--bubble-pop-third-x": positionArray[4],
        "--bubble-pop-third-y": positionArray[5],
        "--bubble-pop-third-size": sizeArray[2],
        "--bubble-pop-third-duration": durationArray[2],

        top: top,
        left: left,
      }}
      className="bubble-pop"
      onAnimationEnd={deletePopElement(id)}
    ></div>
  );
};

export default BubblePop;
