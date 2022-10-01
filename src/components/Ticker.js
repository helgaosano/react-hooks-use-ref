import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  
  const prevPriceRef = useRef(price);

  useEffect(() => {
   // use the current value of the ref
   const prevPrice = prevPriceRef.current;
   
   if (price > prevPrice) {
     setColor("green");
   } else if (price < prevPrice) {
     setColor("red");
   } else {
     setColor("black");
   }
   //console.log(prevPrice)

   // set the new value of the ref (note: this doesn't trigger a re-render)
   prevPriceRef.current = price;
   //console.log(price)
 }, [price]);

 useEffect(() => {
  const id = setInterval(() => setPrice(makeRandomNumber), 1000);
  return function () {
    clearInterval(id);
  };
}, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;

/**
 * useRef returns only one value which is the actual data stored. When the referenece value is 
 * changed, its is updated without re-rendering component.
 * .current attribute in Ref allows reference to be accessed.
 * 
 * useState returns two properties of an array, state/value and the function to update the data.component must
 * re-render to update the state.
 * 
 * In the first useEffect, we use useRef hook to persist the previous price that is compared with the new price. useRef stores the 
 * previous price.
 * 
 * In the second useEffect, our price is set to random number that is generated after every one second. 
 */