import { useEffect, useState } from "react";
import "./App.css";
import Bubble from "./components/Bubble";
import BubblePop from "./components/BubblePop";

let counter = 0;
let clickCounter = 0;
let timeout = 1000;
let clicks = [];

function App() {
  const [bubbles, setBubbles] = useState([]);
  const [points, setPoints] = useState(0);
  const [lost, setLost] = useState(0);
  const [clicksState, setClicksState] = useState([]);

  const randomInt = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const deletePopElement = (id) => {
    console.log(id);
    clicks = clicks.filter((click) => click.id !== id);
  };

  const addPopAnimation = (e) => {
    const { clientX, clientY } = e;
    console.log(clientX, clientY);
    clicks = [
      ...clicks,
      {
        id: clickCounter,
        element: (
          <BubblePop
            id={clickCounter}
            left={clientX}
            top={clientY}
            randomInt={randomInt}
            deletePopElement={deletePopElement}
          />
        ),
      },
    ];
    clickCounter++;
  };

  const popBubble = (key) => {
    console.log(key);
    setBubbles(bubbles.filter((bubble) => bubble.key !== key));
    setPoints(() => points + 1);
    console.log(points);
  };

  const addBubble = () => {
    let iteration = randomInt(1, 4);
    for (let i = 0; i < iteration; i++) {
      setBubbles([
        ...bubbles,
        {
          key: counter,
          bubble: <Bubble randomInt={randomInt} />,
        },
      ]);
      counter++;
    }
  };

  useEffect(() => {
    if (timeout > 50) {
      const timer = setTimeout(addBubble, timeout - counter);
      return () => clearTimeout(timer);
    }
  }, [bubbles]);

  useEffect(() => {
    setClicksState(clicks);
  }, [clicks]);

  return (
    <div className="wrapper">
      {clicksState.map((click) => click.element)}
      {bubbles.map((bubble) => (
        <div
          key={bubble.key}
          onClick={(e) => {
            e.preventDefault();
            popBubble(bubble.key);
            addPopAnimation(e);
          }}
        >
          {bubble.bubble}
        </div>
      ))}
    </div>
  );
}

export default App;
