"use client";
import React, { useState, useEffect } from "react";
import AddToArray from "./elements/add-to-array";
import { createRandomArray } from "@/app/utils/sorting";

export const BogoSort: React.FC = () => {
    const [arrayLength, setArrayLength] = useState<number>(5);
    const [randomArray, setRandomArray] = useState<number[]>([]);
    const [arrayError, setArrayError] = useState("");
    const [sorting, setSorting] = useState(false);

    useEffect(() => {
        try {
            setRandomArray(createRandomArray(arrayLength));
        } catch (e) {
            setRandomArray(createRandomArray(30));
            setArrayLength(30);
            setArrayError("Das maximale Länge beträgt 30");
        }
    }, [arrayLength]);

    const isSorted = (arr: number[]) => arr.every((v, i, a) => i === 0 || a[i - 1] <= v);

    const shuffleArray = (arr: number[]) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    };

    const bogoSort = async (arr: number[]) => {
        const tempArr = [...arr];
        setSorting(true);
        while (!isSorted(tempArr)) {
            shuffleArray(tempArr);
            setRandomArray([...tempArr]);
            await new Promise((resolve) => setTimeout(resolve, 200));
        }
        setSorting(false);
    };

    return (
        <div className="p-4">
            <div className="flex justify-center items-end mb-4 min-h-[500px]">
                {randomArray.map((value, index) => (
                    <div
                        key={index}
                        className="w-8 min-h-5 mx-1 text-white flex items-center justify-center font-bold bg-blue-500"
                        style={{ height: `${value * 3}px` }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
                onClick={() => bogoSort(randomArray)}
                disabled={sorting}
            >
                {sorting ? "Sorting..." : "Start Bogo Sort"}
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
        </div>
    );
};
