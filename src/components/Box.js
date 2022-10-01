import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

function handleMeasureClick() {
  const div = elementRef.current;
  console.log("Measurements: ", div.getBoundingClientRect());
}  

  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;

/**
 * In line 4, we create ref using useRef hook in order to access the DOM element.
 * In the JSX (line 12), we attach ref to DOM element by adding a special ref attribute to JSX element.
 * In line 14, we can access information about that DOM elenment in our component
 */