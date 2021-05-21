import { ArrayVariation } from "./types";

export const shuffleArray = (arrayToShuffle: any[]): any[] => {
  const shuffledArray = arrayToShuffle.map(() => null);

  arrayToShuffle.forEach((element, _) => {
    let randomIndex = Math.round(Math.random() * (arrayToShuffle.length - 1));
    while (shuffledArray[randomIndex]) {
      randomIndex = Math.round(Math.random() * (arrayToShuffle.length - 1));
    }

    shuffledArray[randomIndex] = element;
  });

  return shuffledArray;
};

export const generateRandomGraphData = (
  arraySize: number,
  arrayVariation: ArrayVariation
) => {
  const emptySizedArray: number[] = Array(arraySize).fill(0);
  const valueMultiplier: number = Math.round(100 / arraySize);

  switch (arrayVariation) {
    case "Random":
      const arrayRandomValues = emptySizedArray.map(() => ({
        value: Math.max(
          Math.round(Math.random() * arraySize) * valueMultiplier,
          3
        ),
      }));
      return arrayRandomValues;
    case "Unique":
      const arrayUniqueValues = emptySizedArray.map((_, index) => ({
        value: (index + 1) * valueMultiplier,
      }));
      return shuffleArray(arrayUniqueValues);
  }
};
