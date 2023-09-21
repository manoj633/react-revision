import React, { useMemo, useState } from "react";

function CounterForMemo() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCountOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementCountTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <div>
      Demo for useMemo{" "}
      <div>
        <button type="button" onClick={incrementCountOne}>
          Increment 1st counter - {countOne}
        </button>{" "}
        {isEven ? "Even" : "Odd"}
      </div>
      <div>
        <button type="button" onClick={incrementCountTwo}>
          Increment 2nd counter - {countTwo}
        </button>
      </div>
    </div>
  );
}

export default CounterForMemo;
