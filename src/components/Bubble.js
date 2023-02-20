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

export default function Bubble({ randomInt }) {
  const size = randomInt(6, 14);

  const style = {
    position: "absolute",
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundColor:
      backgroundColors[randomInt(0, backgroundColors.length - 1)],
    borderRadius: "50%",
    top: window.innerHeight,
    left: randomInt(0, window.innerWidth - size * 16),
  };

  const bubbleOnTop = () => {
    console.log("end");
  };

  return (
    <div onAnimationEnd={bubbleOnTop} className="bubble" style={style}></div>
  );
}
