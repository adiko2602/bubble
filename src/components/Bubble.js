import "./Bubble.css";

const backgroundColors = [
  "#2a52be",
  "#3f63c5",
  "#5575cb",
  "#6a86d2",
  "#7f97d8",
  "#95a9df",
  "#aabae5",
  "#bfcbec",
  "#d4dcf2",
  "#eaeef9",
];

export default function Bubble() {
  const randomInt = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const size = randomInt(4, 20);

  const style = {
    width: `${size}vw`,
    height: `${size}vw`,
    backgroundColor:
      backgroundColors[randomInt(0, backgroundColors.length - 1)],
    borderRadius: "50%",
    position: "absolute",
    top: window.innerHeight,
    left: randomInt(0, window.innerWidth - size),
  };

  return <div className="bubble" style={style}></div>;
}
