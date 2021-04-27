export const generateSoringSteps = (arrayToSort: number[]): number[][] => {
  /**
   * Selection Sort.
   */

  const arrayToSortCopy: number[] = [...arrayToSort];
  const sortingSteps: number[][] = [[...arrayToSortCopy]];

  for (let i = 0; i < arrayToSortCopy.length; i++) {
    let minimum = Infinity;
    let minimumIndex = 0;

    for (let j = i; j < arrayToSortCopy.length; j++) {
      if (minimum > arrayToSortCopy[j]) {
        minimumIndex = j;
        minimum = arrayToSortCopy[j];
      }
    }

    const temp: number = arrayToSortCopy[i];
    arrayToSortCopy[i] = arrayToSortCopy[minimumIndex];
    arrayToSortCopy[minimumIndex] = temp;

    sortingSteps.push([...arrayToSortCopy]);
  }

  return sortingSteps;
};
