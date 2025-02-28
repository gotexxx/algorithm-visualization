"use client";
import React, { useState, useEffect } from "react";
import AddToArray from "./elements/add-to-array";
import { createRandomArray } from "@/app/utils/sorting";

export const QuickSort: React.FC = () => {
    const [arrayLength, setArrayLength] = useState<number>(10);
    const [randomArray, setRandomArray] = useState<number[]>([]);
    const [arrayError, setArrayError] = useState("");

    useEffect(() => {
        try {
            setRandomArray(createRandomArray(arrayLength));
        } catch (e) {
            setRandomArray(createRandomArray(30));
            setArrayLength(30);
            setArrayError("Das maximale Länge beträgt 30");
        }
    }, [arrayLength]);

    const [sorting, setSorting] = useState(false);
    const [highlightIndices, setHighlightIndices] = useState<[number, number] | null>(null);

    const quickSort = async (arr: number[], start: number, end: number): Promise<void> => {
        if (start < end) {
            const pivotIndex = await partition(arr, start, end);
            await quickSort(arr, start, pivotIndex - 1);
            await quickSort(arr, pivotIndex + 1, end);
        }
    };

    const partition = async (arr: number[], start: number, end: number): Promise<number> => {
        const pivot = arr[end];
        let i = start - 1;
        for (let j = start; j < end; j++) {
            setHighlightIndices([i + 1, j]);
            await new Promise((resolve) => setTimeout(resolve, 150));

            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                // Update state with new array after swap
                setRandomArray([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 150));
            }
        }
        [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
        // Update state after pivot swap
        setRandomArray([...arr]);
        setHighlightIndices([i + 1, end]);
        await new Promise((resolve) => setTimeout(resolve, 150));
        return i + 1;
    };

    const startQuickSort = async () => {
        setSorting(true);
        // Create a copy of the array to manipulate
        const sortingArray = [...randomArray];
        await quickSort(sortingArray, 0, sortingArray.length - 1);
        setSorting(false);
        // Ensure final state is set
        setHighlightIndices(null);
        setRandomArray([...sortingArray]);
    };

    return (
        <div className="p-4">
            <div className="flex justify-center items-end mb-4 min-h-[500px]">
                {randomArray.map((value, index) => {
                    const isHighlighted =
                        highlightIndices && (index === highlightIndices[0] || index === highlightIndices[1]);
                    return (
                        <div
                            key={index}
                            className={`w-8 min-h-5 mx-1 text-white flex items-center justify-center font-bold transition-all duration-300 ease-in-out ${
                                isHighlighted ? "bg-yellow-500" : "bg-blue-500"
                            }`}
                            style={{
                                height: `${value * 3}px`,
                                transition: "height 0.3s ease, transform 0.3s ease",
                            }}
                        >
                            {value}
                        </div>
                    );
                })}
            </div>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
                onClick={startQuickSort}
                disabled={sorting}
            >
                {sorting ? "Sorting..." : "Start QuickSort"}
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