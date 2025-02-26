import React, { useState } from "react";
import { createRandomArray, shuffleArray } from "@/app/utils/sorting";

interface AddToArrayProps {
  arrayLength: number;
  randomArray: number[];
  setArrayLength: (length: number) => void;
  setRandomArray: (array: number[]) => void;
  arrayError?: string;
  sorting: boolean;
}

export default function AddToArray({
  arrayLength,
  randomArray,
  setArrayLength,
  setRandomArray,
  arrayError,
  sorting,
}: AddToArrayProps) {
  const handleGenerateArray = () => {
    const newArray = createRandomArray(arrayLength);
    setRandomArray(newArray);
  };

  return (
    <div>
      <label className="mr-5">Array Length:</label>
      <input
        type="number"
        className="border rounded-md border-black mr-5"
        value={arrayLength}
        onChange={(e) => {
          setArrayLength(Number(e.target.value));
        }}
        min="1"
        max="30"
      />
      {arrayError && <p>{arrayError}</p>}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        onClick={handleGenerateArray}
        disabled={sorting}
      >
        Generate Array
      </button>

      <button
        className="ml-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        onClick={() => setRandomArray(shuffleArray(randomArray))}
        disabled={sorting}
      >
        Shuffle Array
      </button>
    </div>
  );
}
