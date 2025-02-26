export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
export function createRandomArray(length: number): number[] {
  if (length > 100) {
    throw new Error(
      "Length exceeds the number of unique values available (1-100)."
    );
  }

  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < length) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
}
