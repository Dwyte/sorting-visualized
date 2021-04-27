import { Bar } from "./types";

export const generateSoringSteps = (arrayToSort: Bar[]): Bar[][] => {
  /**
   * Selection Sort.
   */

  const arrayToSortCopy: Bar[] = [...arrayToSort];
  const sortingSteps: Bar[][] = [[...arrayToSortCopy]];

  for (let i = 0; i < arrayToSortCopy.length; i++) {
    let minimum = Infinity;
    let minimumIndex = i;

    for (let j = i; j < arrayToSortCopy.length; j++) {
      const currentStep = arrayToSortCopy.map((element) => ({ ...element }));
      currentStep[j].color = "red";
      sortingSteps.push(currentStep);

      if (minimum > arrayToSortCopy[j].value) {
        arrayToSortCopy[minimumIndex] = {
          ...arrayToSortCopy[minimumIndex],
          color: "white",
        };

        arrayToSortCopy[j] = { ...arrayToSortCopy[j], color: "orange" };
        sortingSteps.push(arrayToSortCopy.map((element) => ({ ...element })));

        minimumIndex = j;
        minimum = arrayToSortCopy[j].value;
      }
    }

    const temp: Bar = arrayToSortCopy[i];

    arrayToSortCopy[i] = arrayToSortCopy[minimumIndex];
    arrayToSortCopy[minimumIndex] = temp;
    sortingSteps.push([...arrayToSortCopy]);
  }

  for (let i = 0; i < arrayToSortCopy.length; i++) {
    arrayToSortCopy[i] = {
      ...arrayToSortCopy[i],
      color: "white",
    };

    sortingSteps.push(arrayToSortCopy.map((element) => ({ ...element })));
  }

  return sortingSteps;
};
