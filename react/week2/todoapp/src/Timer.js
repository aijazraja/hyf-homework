import React, { useState,useEffect } from "react";

function Timer() {
  const [timerCounter, setTimeCounter] = useState(0);
  useEffect(() => {
  const timer = setTimeout(() => {
    setTimeCounter((prevCount) => prevCount + 1);
  }, 1000);
  return () => {
    clearTimeout(timer);
  }
});
  return <p>You have spend {timerCounter} seconds on this website</p>;
}
export default Timer;
