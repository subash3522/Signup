import React, { useState } from "react";

function Square({ index, updater, arr }) {
  return (
    <>
      <button className="square" onClick={() => updater(index)}>
        {arr[index]}
      </button>
    </>
  );
}

export default Square;
