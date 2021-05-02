import { Bar, SortingAlgorithm } from "./types";

const deepCopyArray = (arrayToCopy: Bar[]) => {
  const deepCopy: Bar[] = arrayToCopy.map((bar: Bar) => {
    return { ...bar };
  });

  return deepCopy;
};

export const bubbleSort = (arrayToSort: Bar[]): Bar[][] => {
  const arrayToSortCopy = deepCopyArray(arrayToSort);
  const sortingSteps = [deepCopyArray(arrayToSort)];

  for (let n = arrayToSortCopy.length; n > 0; n--) {
    for (let i = 0, j = 1; j < n; i++, j++) {
      const comparisonStep = deepCopyArray(arrayToSortCopy);
      comparisonStep[i].color = "red";
      comparisonStep[j].color = "red";
      sortingSteps.push(comparisonStep);

      if (arrayToSortCopy[i].value > arrayToSortCopy[j].value) {
        const temp = arrayToSortCopy[i];
        arrayToSortCopy[i] = arrayToSortCopy[j];
        arrayToSortCopy[j] = temp;

        const swapStep = deepCopyArray(arrayToSortCopy);
        swapStep[i].color = "orange";
        swapStep[j].color = "orange";
        sortingSteps.push(swapStep);
      }
    }

    arrayToSortCopy[n - 1].color = "orange";
  }

  sortingSteps.push([...arrayToSortCopy]);
  return sortingSteps;
};

export const selectionSort = (arrayToSort: Bar[]): Bar[][] => {
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

export const generateSoringSteps = (
  arrayToSort: Bar[],
  algorithm: SortingAlgorithm = "Selection"
): Bar[][] => {
  switch (algorithm) {
    case "Bubble":
      return bubbleSort(arrayToSort);
    case "Selection":
      return selectionSort(arrayToSort);
    default:
      throw Error("Algorithm not implemented.");
  }
};
