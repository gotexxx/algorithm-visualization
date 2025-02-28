import Hero from "@/app//components/ui/hero";
import { BubbleSort } from "@/app/components/ui/algorithms/bubble-sort";
import { AlgorithmDescription } from "@/app/components/ui/algorithms/elements/algorithm-description";
import { SelectionSort } from "@/app/components/ui/algorithms/selection-sort";
import {BogoSort} from "@/app/components/ui/algorithms/bogo-sort";
import {QuickSort} from "@/app/components/ui/algorithms/quick-sort";

const Sort: React.FC = () => {
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

  const bogoSortCode = `
    function bogoSort(arr) {
        while (!arr.every((v, i, a) => i === 0 || a[i - 1] <= v)) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        return arr;
    }`;
  const bogoSortText =
      "Bogo Sort ist ein extrem ineffizienter Sortieralgorithmus, der die Elemente zufällig anordnet, bis die Liste sortiert ist. Er hat eine durchschnittliche Zeitkomplexität von O(n!).";

  const quicksortText= 'Quicksort ist ein effizienter, rekursiver Sortieralgorithmus mit einer durchschnittlichen Zeitkomplexität von **O(n log n)**. Er wählt ein **Pivot-Element**, teilt das Array in kleinere (kleiner als Pivot) und größere (größer als Pivot) Werte auf und sortiert diese rekursiv.'

      const quickSortCode = `
    function bogoSort(arr) {
        while (!arr.every((v, i, a) => i === 0 || a[i - 1] <= v)) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        return arr;
    }`;


  return (
    <div>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero title={"Sorting Algorithmen"} text={"Alghortimen zum sorten"} />
        <section className={"my-10"}>
          <AlgorithmDescription
            code={bubbleSortCode}
            title="Bubble Sort"
            text={bubbleSortText}
          >
            <BubbleSort />
          </AlgorithmDescription>
        </section>
        <section className={"my-10"}>
          <AlgorithmDescription
            code={selectionSortCode}
            title="Selection Sort"
            text={selectionSortText}
          >
            <SelectionSort />
          </AlgorithmDescription>
        </section>
        <section className={"my-10"}>
          <AlgorithmDescription
            code={bogoSortCode}
            title="Bogo Sort"
            text={bogoSortText}
          >
            <BogoSort />
          </AlgorithmDescription>
        </section>
        <section className={"my-10"}>
          <AlgorithmDescription
            code={quickSortCode}
            title="Quick Sort"
            text={quicksortText}
          >
            <QuickSort />
          </AlgorithmDescription>
        </section>
      </div>
    </div>
  );
};

export default Sort;
