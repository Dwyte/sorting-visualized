import { ArrayVariation, Bar } from "./types";

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
): Bar[] => {
  const emptySizedArray: number[] = Array(arraySize).fill(0);
  const valueMultiplier: number = Math.round(100 / arraySize);

  switch (arrayVariation) {
    case "Random":
      const randomArray: Bar[] = emptySizedArray.map(() => ({
        value: Math.max(
          Math.round(Math.random() * arraySize) * valueMultiplier,
          3
        ),
      }));
      return randomArray;
    case "Unique":
      const uniqueArray: Bar[] = emptySizedArray.map((_, index) => ({
        value: (index + 1) * valueMultiplier,
      }));
      return shuffleArray(uniqueArray);
    case "Reversed":
      const reversedArray: Bar[] = emptySizedArray.map((_, index) => ({
        value: (index + 1) * valueMultiplier,
      }));
      return reversedArray.reverse();
    case "Nearly":
      const nearlyArray: Bar[] = emptySizedArray.map((_, index) => ({
        value: (index + 1) * valueMultiplier,
      }));

      const randomRange: number = Math.min(3, Math.floor(arraySize * 0.25));
      const randomTotalRange: number = randomRange * 2 + 1;

      nearlyArray.forEach((_, index: number) => {
        if (Math.random() < 0.5) {
          let newIndex: number =
            index +
            (Math.floor(Math.random() * randomTotalRange) - randomRange);

          if (newIndex >= arraySize) newIndex = arraySize - 1;
          if (newIndex < 0) newIndex = 0;

          const temp: Bar = nearlyArray[index];
          nearlyArray[index] = nearlyArray[newIndex];
          nearlyArray[newIndex] = temp;
        }
      });

      return nearlyArray;
    default:
      throw Error("Not Implemented.");
  }
};
