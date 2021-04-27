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
