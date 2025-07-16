import { BubbleSort } from "@/app/components/ui/algorithms/bubble-sort";
import { AlgorithmDescription } from "@/app/components/ui/algorithms/elements/algorithm-description";
import { SelectionSort } from "@/app/components/ui/algorithms/selection-sort";
import { BogoSort } from "@/app/components/ui/algorithms/bogo-sort";
import { QuickSort } from "@/app/components/ui/algorithms/quick-sort";

const Sort: React.FC = () => {
    // Bubble Sort Code
    const bubbleSortCode = `
  function bubbleSort(arr) {
    // Äußere Schleife für die Anzahl der Durchläufe
    for (let i = 0; i < arr.length - 1; i++) {
      // Innere Schleife für den Vergleich der benachbarten Elemente
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Vergleiche benachbarte Elemente
        if (arr[j] > arr[j + 1]) {
          // Elemente tauschen, wenn sie in der falschen Reihenfolge sind
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr; // Rückgabe des sortierten Arrays
  }`;

    const bubbleSortText = "Bubble Sort tauscht benachbarte Elemente, wenn sie in der falschen Reihenfolge sind. Zeitkomplexität: O(n²).";

    // Selection Sort Code
    const selectionSortCode = `
  function selectionSort(arr) {
    // Durchlaufe das Array und suche das kleinste Element
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      // Suche das kleinste Element im unsortierten Teil
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) lowest = j;
      }
      // Tausche das kleinste Element mit dem aktuellen Element
      if (lowest !== i) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
    return arr; // Rückgabe des sortierten Arrays
  }`;

    const selectionSortText = "Selection Sort findet das kleinste Element und tauscht es an den Anfang. Zeitkomplexität: O(n²).";

    // Bogo Sort Code
    const bogoSortCode = `
  function bogoSort(arr) {
    // Wiederhole den Sortiervorgang, bis das Array sortiert ist
    while (!arr.every((v, i, a) => i === 0 || a[i - 1] <= v)) {
      // Mische das Array zufällig durch
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Wähle einen zufälligen Index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Tausche die Elemente
      }
    }
    return arr; // Rückgabe des sortierten Arrays
  }`;

    const bogoSortText = "Bogo Sort mischt das Array zufällig, bis es sortiert ist. Zeitkomplexität: O(n!).";

    // Quick Sort Text
    const quicksortText = "Quicksort ist ein rekursiver Algorithmus mit Zeitkomplexität O(n log n). Der Algorithmus wählt ein Pivot-Element und teilt das Array in kleinere und größere Teile auf.";

    // Quick Sort Code
    const quickSortCode = `
  function quickSort(arr) {
    // Wähle das Pivot-Element
    const pivot = arr[Math.floor(arr.length / 2)];
  
    const left = [];  // Array für Werte kleiner als Pivot
    const middle = []; // Array für Werte gleich Pivot
    const right = [];  // Array für Werte größer als Pivot
  
    // Verteile die Elemente basierend auf dem Pivot
    for (const num of arr) {
      if (num < pivot) left.push(num);
      else if (num > pivot) right.push(num);
      else middle.push(num);
    }
  
    // Rekursive Aufrufe für linke und rechte Teilarrays
    return [...quickSort(left), ...middle, ...quickSort(right)];
  }`;

    return (
        <div>
            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <section className={"text-black text-2xl"}>
                    <p>
                        Zeitkomplexität beschreibt, wie die Laufzeit eines Algorithmus mit der Eingabegröße n wächst. Sie gibt an, wie effizient ein Algorithmus ist, insbesondere bei großen Datenmengen.<br/>
                        <strong>O(1)</strong> – Konstant: Laufzeit bleibt konstant.<br/>
                        <strong>O(log n)</strong> – Logarithmisch: Z.B. binäre Suche.<br/>
                        <strong>O(n)</strong> – Linear: Proportional zur Eingabegröße.<br/>
                        <strong>O(n log n)</strong> – Quasilinear: Z.B. effiziente Sortieralgorithmen.<br/>
                        <strong>O(n²)</strong> – Quadratisch: Ineffizient für große Datenmengen.<br/>
                        <strong>O(n!)</strong> – Fakultät: Extrem ineffizient.
                    </p>
                </section>

                {/* Bubble Sort */}
                <section className={"my-10"}>
                    <AlgorithmDescription code={bubbleSortCode} title="Bubble Sort" text={bubbleSortText}>
                        <BubbleSort />
                    </AlgorithmDescription>
                </section>

                {/* Selection Sort */}
                <section className={"my-10"}>
                    <AlgorithmDescription code={selectionSortCode} title="Selection Sort" text={selectionSortText}>
                        <SelectionSort />
                    </AlgorithmDescription>
                </section>

                {/* Bogo Sort */}
                <section className={"my-10"}>
                    <AlgorithmDescription code={bogoSortCode} title="Bogo Sort" text={bogoSortText}>
                        <BogoSort />
                    </AlgorithmDescription>
                </section>

                {/* Quick Sort */}
                <section className={"my-10"}>
                    <AlgorithmDescription code={quickSortCode} title="Quick Sort" text={quicksortText}>
                        <QuickSort />
                    </AlgorithmDescription>
                </section>
            </div>
        </div>
    );
};

export default Sort;
