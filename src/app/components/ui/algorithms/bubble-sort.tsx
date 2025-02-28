"use client";
import React, { useState, useEffect } from "react";
import AddToArray from "./elements/add-to-array";
import { createRandomArray } from "@/app/utils/sorting";

export const BubbleSort: React.FC = () => {
  const [arrayLength, setArrayLength] = useState<number>(10); // Default length
  const [randomArray, setRandomArray] = useState<number[]>([]);
  const [arrayError, setArrayError] = useState("");

  useEffect(() => {
    // Initialize the random array with unique values when arrayLength changes
    try {
      setRandomArray(createRandomArray(arrayLength));
    } catch (e) {
      setRandomArray(createRandomArray(30));
      setArrayLength(30);
      setArrayError("das maximale länge beträgt 30");
    }
  }, [arrayLength]);

  const [sorting, setSorting] = useState(false);
  const [highlightIndices, setHighlightIndices] = useState<
    [number, number] | null
  >(null);

  const bubbleSort = async (arr: number[]) => {
    const n = arr.length;
    const tempArr = [...arr];
    setSorting(true);

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight current values being compared
        setHighlightIndices([j, j + 1]);

        if (tempArr[j] > tempArr[j + 1]) {
          [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
          setRandomArray([...tempArr]);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        // Reset highlight
        setHighlightIndices(null);
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
                          style={{height: `${value * 3}px`}}
                      >
                          {value}
                      </div>
                  );
              })}
          </div>
          <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
              onClick={() => bubbleSort(randomArray)}
              disabled={sorting}
          >
              {sorting ? "Sorting..." : "Start Bubble Sort"}
          </button>
          <AddToArray
              randomArray={randomArray}
              arrayLength={arrayLength}
              setArrayLength={setArrayLength}
              setRandomArray={setRandomArray}
              sorting={sorting}
          />
          <p className="mt-4 text-gray-700">
              Random array is equal to: {randomArray.join(", ")}
          </p>
          <p>{arrayError}</p>

      </div>
  );
};
