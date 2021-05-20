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

export const generateRandomGraphData = (arraySize: number) =>
  shuffleArray(
    Array(arraySize)
      .fill(0)
      .map((_, index) => ({
        value: (index + 1) * Math.round(100 / arraySize),
      }))
  );
