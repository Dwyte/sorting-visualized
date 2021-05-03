import { Bar, SortingAlgorithm } from "./types";

const deepCopyArray = (arrayToCopy: Bar[]) => {
  const deepCopy: Bar[] = arrayToCopy.map((bar: Bar) => {
    return { ...bar };
  });

  return deepCopy;
};

export const insertionSort = (arrayToSort: Bar[]): Bar[][] => {
  const arrayToSortCopy = deepCopyArray(arrayToSort);
  const sortingSteps = [deepCopyArray(arrayToSort)];

  for (let n = 1; n < arrayToSortCopy.length; n++) {
    for (let i = n - 1, j = n; j > 0; i--, j--) {
      const comparisonStep = deepCopyArray(arrayToSortCopy);
      comparisonStep[i].color = "red";
      comparisonStep[j].color = "red";
      sortingSteps.push(comparisonStep);

      if (arrayToSortCopy[i].value > arrayToSortCopy[j].value) {
        const temp = arrayToSortCopy[i];
        arrayToSortCopy[i] = arrayToSortCopy[j];
        arrayToSortCopy[j] = temp;

        const comparisonStep = deepCopyArray(arrayToSortCopy);
        comparisonStep[i].color = "orange";
        comparisonStep[j].color = "orange";
        sortingSteps.push(comparisonStep);
      } else {
        break;
      }
    }

    for (let i = 0; i < n; i++) {
      arrayToSortCopy[i].color = "green";
    }
  }

  arrayToSortCopy[arrayToSort.length - 1].color = "green";
  sortingSteps.push([...arrayToSortCopy]);
  return sortingSteps;
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

    arrayToSortCopy[n - 1].color = "green";
  }

  sortingSteps.push([...arrayToSortCopy]);
  return sortingSteps;
};

export const selectionSort = (arrayToSort: Bar[]): Bar[][] => {
  const arrayToSortCopy = deepCopyArray(arrayToSort);
  const sortingSteps = [deepCopyArray(arrayToSort)];

  for (let i = 0; i < arrayToSortCopy.length; i++) {
    let minimum = Infinity;
    let minimumIndex = i;

    for (let j = i; j < arrayToSortCopy.length; j++) {
      const currentStep = deepCopyArray(arrayToSortCopy);
      currentStep[j].color = "red";
      sortingSteps.push(currentStep);

      if (minimum > arrayToSortCopy[j].value) {
        arrayToSortCopy[minimumIndex] = {
          ...arrayToSortCopy[minimumIndex],
          color: "white",
        };

        arrayToSortCopy[j].color = "orange";
        sortingSteps.push(deepCopyArray(arrayToSortCopy));

        minimumIndex = j;
        minimum = arrayToSortCopy[j].value;
      }
    }

    const temp: Bar = arrayToSortCopy[i];
    arrayToSortCopy[i] = arrayToSortCopy[minimumIndex];
    arrayToSortCopy[minimumIndex] = temp;
    arrayToSortCopy[i].color = "green";

    sortingSteps.push(deepCopyArray(arrayToSortCopy));
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
    case "Insertion":
      return insertionSort(arrayToSort);
    default:
      throw Error("Algorithm not implemented.");
  }
};
