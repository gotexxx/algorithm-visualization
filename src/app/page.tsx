// import Image from "next/image";
import MazeVisualizer from "@/app/components/ui/algorithms/maze-visualizer";
import {AlgorithmDescription} from "@/app/components/ui/algorithms/elements/algorithm-description";
import {BubbleSort} from "@/app/components/ui/algorithms/bubble-sort";
import {SelectionSort} from "@/app/components/ui/algorithms/selection-sort";

export default function Home() {

    const bubbleSortCode = `
  function bubbleSort(arr) {
    let n = arr.length; 
    // Äußere Schleife für die Anzahl der Durchläufe
    for (let i = 0; i < n - 1; i++) {
      // Innere Schleife für den Vergleich der benachbarten Elemente
      for (let j = 0; j < n - i - 1; j++) {
        // Vergleiche benachbarte Elemente
        if (arr[j] > arr[j + 1]) {
          // Elemente tauschen, wenn sie in der falschen Reihenfolge sind
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr; 
  }`;
    const bubbleSortText =
        "Bubble Sort ist ein einfacher Sortieralgorithmus, der wiederholt durch die Liste geht, benachbarte Elemente vergleicht und sie austauscht, wenn sie in der falschen Reihenfolge sind. Dieser Vorgang wird wiederholt, bis die Liste sortiert ist. Der Algorithmus hat seinen Namen, weil großere Elemente „nach oben“ blubbern";
    const selectionSortCode = `
  function selectionSort(arr) {
  let n = arr.length; 
  // Äußere Schleife für die Auswahl des Startpunkts des unsortierten Teils
  for (let i = 0; i < n - 1; i++) {
    // Angenommener Index des kleinsten Wertes im unsortierten Teil
    let minIndex = i;
    // Innere Schleife zum Finden des kleinsten Elements im unsortierten Teil
    for (let j = i + 1; j < n; j++) {
      // Vergleiche das aktuelle Element mit dem kleinsten bisher gefundenen Element
      if (arr[j] < arr[minIndex]) {
        // Aktualisiere den Index des kleinsten Wertes
        minIndex = j;
      }
    }
    // Tausche das kleinste gefundene Element mit dem ersten Element des unsortierten Teils
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}`;
    const selectionSortText =
        "Selection Sort ist ein einfacher Sortieralgorithmus, der wiederholt das kleinste Element im unsortierten Teil der Liste findet und es an den Anfang des unsortierten Teils verschiebt. Dieser Vorgang wird fortgesetzt, bis die gesamte Liste sortiert ist. Der Algorithmus hat eine Zeitkomplexität von O(n²). (O(n²) bedeutet, dass die Laufzeit des Algorithmus quadratisch mit der Größe der Eingabe wächst, was bedeutet, dass die Zeitkomplexität proportional zum Quadrat der Eingabegröße ist.)";


    return (
    <div className=" items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {/*<Image*/}
            {/*  className="dark:invert"*/}
            {/*  src="https://nextjs.org/icons/next.svg"*/}
            {/*  alt="Next.js logo"*/}
            {/*  width={180}*/}
            {/*  height={38}*/}
            {/*  priority*/}
            {/*/>*/}

            <section className={"grid grid-cols-2 gap-20 mt-[50px]"}>
                <MazeVisualizer  />
                <p className={"text-black text-2xl"}>
                    Die Suche startet vom Startpunkt (oben links). Dabei wird jede erreichbare Zelle Schritt für Schritt angeschaut. Diese Suche nennt man Breitensuche, sie prüft zuerst alle Nachbarn, dann deren Nachbarn usw. Sobald das Ziel (unten rechts) gefunden wurde, merkt sich das Programm den Weg zurück und markiert ihn grün. Gelbe Felder zeigen besuchte Zellen.
                    So erkennt man den kürzesten Weg vom Start zum Ziel.</p>
            </section>
            <section className={"my-10"}>
                <AlgorithmDescription
                    code={bubbleSortCode}
                    title="Bubble Sort"
                    text={bubbleSortText}
                >
                    <BubbleSort/>
                </AlgorithmDescription>
            </section>
            <section className={"my-10"}>
                <AlgorithmDescription
                    code={selectionSortCode}
                    title="Selection Sort"
                    text={selectionSortText}
                >
                    <SelectionSort/>
                </AlgorithmDescription>
            </section>

        </main>
    </div>
    );
}
