"use client";
import React, { useState, useEffect } from "react";
import AddToArray from "./elements/add-to-array";
import { createRandomArray } from "@/app/utils/sorting";

export const SelectionSort: React.FC = () => {
  const [arrayLength, setArrayLength] = useState<number>(10);
  const [randomArray, setRandomArray] = useState<number[]>([]);
  const [arrayError, setArrayError] = useState("");

  useEffect(() => {
    try {
      setRandomArray(createRandomArray(arrayLength));
    } catch (Error) {
      setRandomArray(createRandomArray(30));
      setArrayLength(30);
      setArrayError("das maximale länge beträgt 30");
    }
  }, [arrayLength]);

  const [sorting, setSorting] = useState(false);
  const [highlightIndices, setHighlightIndices] = useState<
    [number, number] | null
  >(null);

  const selectionSort = async (arr: number[]) => {
    const n = arr.length;
    const tempArr = [...arr];
    setSorting(true);

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        // Highlight current values being compared
        setHighlightIndices([minIndex, j]);

        if (tempArr[j] < tempArr[minIndex]) {
          minIndex = j;
        }


        setRandomArray([...tempArr]);
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Reset highlight
        setHighlightIndices(null);
      }

      if (minIndex !== i) {
        [tempArr[i], tempArr[minIndex]] = [tempArr[minIndex], tempArr[i]];
        setRandomArray([...tempArr]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    setSorting(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-end mb-4 min-h-[500px]">
        {randomArray.map((value, index) => {
          const isHighlighted =
            highlightIndices &&
            (index === highlightIndices[0] || index === highlightIndices[1]);
          return (
            <div
              key={index}
              className={`w-8 min-h-5 mx-1 text-white flex items-center justify-center font-bold ${
                isHighlighted ? "bg-yellow-500" : "bg-blue-500"
              }`}
              style={{ height: `${value * 3}px` }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        onClick={() => selectionSort(randomArray)}
        disabled={sorting}
      >
        {sorting ? "Sorting..." : "Start Selection Sort"}
      </button>
      <AddToArray
        randomArray={randomArray}
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        setRandomArray={setRandomArray}
        sorting={sorting}
        arrayError={arrayError}
      />
      <p className="mt-4 text-gray-700">
        Random array is equal to: {randomArray.join(", ")}
      </p>
    </div>
  );
};
