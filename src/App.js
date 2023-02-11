import { useEffect, useState } from "react";
import "./App.css";
import Bubble from "./components/Bubble";

let counter = 0;
let timeout = 1000;

function App() {
  const [bubbles, setBubbles] = useState([]);

  const popBubble = (key) => {
    console.log(key);
    setBubbles(bubbles.filter((bubble) => bubble.key !== key));
  };

  const addBubble = () => {
    setBubbles([
      ...bubbles,
      {
        key: counter,
        bubble: <Bubble />,
      },
    ]);
    counter++;
  };

  useEffect(() => {
    const timer = setTimeout(addBubble, timeout - counter);
    return () => clearTimeout(timer);
  }, [bubbles]);

  return (
    <div>
      <button type="button" onClick={addBubble}>
        Dodaj
      </button>
      {bubbles.map((bubble) => (
        <div
          key={bubble.key}
          onClick={(e) => {
            e.preventDefault();
            popBubble(bubble.key);
          }}
        >
          {bubble.bubble}
        </div>
      ))}
    </div>
  );
}

export default App;
