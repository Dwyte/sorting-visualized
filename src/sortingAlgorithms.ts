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
      comparisonStep[i].color = "Crimson";
      comparisonStep[j].color = "Crimson";
      sortingSteps.push(comparisonStep);

      if (arrayToSortCopy[i].value > arrayToSortCopy[j].value) {
        const temp = arrayToSortCopy[i];
        arrayToSortCopy[i] = arrayToSortCopy[j];
        arrayToSortCopy[j] = temp;

        const comparisonStep = deepCopyArray(arrayToSortCopy);
        comparisonStep[i].color = "DarkOrange";
        comparisonStep[j].color = "DarkOrange";
        sortingSteps.push(comparisonStep);
      } else {
        break;
      }
    }

    for (let i = 0; i < n; i++) {
      arrayToSortCopy[i].color = "SpringGreen";
    }
  }

  arrayToSortCopy[arrayToSort.length - 1].color = "SpringGreen";
  sortingSteps.push([...arrayToSortCopy]);
  return sortingSteps;
};

export const bubbleSort = (arrayToSort: Bar[]): Bar[][] => {
  const arrayToSortCopy = deepCopyArray(arrayToSort);
  const sortingSteps = [deepCopyArray(arrayToSort)];

  for (let n = arrayToSortCopy.length; n > 0; n--) {
    for (let i = 0, j = 1; j < n; i++, j++) {
      const comparisonStep = deepCopyArray(arrayToSortCopy);
      comparisonStep[i].color = "Crimson";
      comparisonStep[j].color = "Crimson";
      sortingSteps.push(comparisonStep);

      if (arrayToSortCopy[i].value > arrayToSortCopy[j].value) {
        const temp = arrayToSortCopy[i];
        arrayToSortCopy[i] = arrayToSortCopy[j];
        arrayToSortCopy[j] = temp;

        const swapStep = deepCopyArray(arrayToSortCopy);
        swapStep[i].color = "DarkOrange";
        swapStep[j].color = "DarkOrange";
        sortingSteps.push(swapStep);
      }
    }

    arrayToSortCopy[n - 1].color = "SpringGreen";
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
      currentStep[j].color = "Crimson";
      sortingSteps.push(currentStep);

      if (minimum > arrayToSortCopy[j].value) {
        arrayToSortCopy[minimumIndex] = {
          ...arrayToSortCopy[minimumIndex],
          color: "white",
        };

        arrayToSortCopy[j].color = "DarkOrange";
        sortingSteps.push(deepCopyArray(arrayToSortCopy));

        minimumIndex = j;
        minimum = arrayToSortCopy[j].value;
      }
    }

    const temp: Bar = arrayToSortCopy[i];
    arrayToSortCopy[i] = arrayToSortCopy[minimumIndex];
    arrayToSortCopy[minimumIndex] = temp;
    arrayToSortCopy[i].color = "SpringGreen";

    sortingSteps.push(deepCopyArray(arrayToSortCopy));
  }

  return sortingSteps;
};

export const mergeSort = (arrayToSort: Bar[]): Bar[][] => {
  const arrayToSortCopy = deepCopyArray(arrayToSort);
  const sortingSteps = [deepCopyArray(arrayToSort)];

  const merge = (array: Bar[], low: number, mid: number, high: number) => {
    const mergedArray = [];

    let fromA: number = low;
    let toA: number = mid;

    let fromB: number = mid;
    let toB: number = high;

    let i: number = fromA;
    let j: number = fromB;

    while (i < toA && j < toB) {
      const compareStep = deepCopyArray(array);
      compareStep[i].color = "Crimson";
      compareStep[j].color = "Crimson";
      sortingSteps.push(compareStep);

      const currentA: Bar = array[i];
      const currentB: Bar = array[j];

      if (currentA.value > currentB.value) {
        mergedArray.push(currentB);
        j++;
      } else {
        mergedArray.push(currentA);
        i++;
      }
    }

    while (i < toA) {
      mergedArray.push(array[i]);
      i++;
    }

    while (j < toB) {
      mergedArray.push(array[j]);
      j++;
    }

    for (let i = low, j = 0; i < high; i++, j++) {
      array[i] = mergedArray[j];

      const copyStep = deepCopyArray(array);
      for (let k = low; k <= i; k++) {
        copyStep[k].color = "SpringGreen";
      }
      sortingSteps.push(copyStep);
    }
  };

  const sort = (array: Bar[], from: number = 0, to: number = array.length) => {
    if (to - from <= 1) return;

    const low: number = from;
    const high: number = to;
    const mid: number = Math.floor((high + low) / 2);

    sort(array, low, mid);
    sort(array, mid, high);
    merge(array, low, mid, high);
  };

  sort(arrayToSortCopy);
  return sortingSteps;
};

export const quickSort = (arrayToSort: Bar[]): Bar[][] => {
  const arrayToSortCopy = deepCopyArray(arrayToSort);
  const sortingSteps = [deepCopyArray(arrayToSort)];

  const partition = (array: Bar[], startIndex: number, endIndex: number) => {
    const pivot: Bar = array[endIndex];
    let partitionIndex: number = startIndex;

    const pivotStep: Bar[] = deepCopyArray(array);
    pivotStep[endIndex].color = "DarkOrange";
    pivotStep[partitionIndex].color = "Aqua";
    sortingSteps.push(pivotStep);

    for (let i = startIndex; i < endIndex; i++) {
      const currBar: Bar = array[i];

      const compareStep: Bar[] = deepCopyArray(array);
      compareStep[partitionIndex].color = "Aqua";
      compareStep[endIndex].color = "DarkOrange";
      compareStep[i].color = "Crimson";
      sortingSteps.push(compareStep);

      if (currBar.value <= pivot.value) {
        if (partitionIndex !== i) {
          const temp: number = array[partitionIndex].value;
          array[partitionIndex].value = currBar.value;
          currBar.value = temp;

          const swapStep: Bar[] = deepCopyArray(array);
          swapStep[endIndex].color = "DarkOrange";
          swapStep[partitionIndex].color = "SpringGreen";
          swapStep[i].color = "SpringGreen";
          sortingSteps.push(swapStep);
        }

        partitionIndex++;
      }
    }

    const beforePartSwapStep: Bar[] = deepCopyArray(array);
    beforePartSwapStep[partitionIndex].color = "Aqua";
    beforePartSwapStep[endIndex].color = "DarkOrange";
    sortingSteps.push(beforePartSwapStep);

    const temp: number = array[partitionIndex].value;
    array[partitionIndex].value = pivot.value;
    pivot.value = temp;

    const partSwapStep: Bar[] = deepCopyArray(array);
    partSwapStep[endIndex].color = "SpringGreen";
    partSwapStep[partitionIndex].color = "SpringGreen";
    sortingSteps.push(partSwapStep);

    return partitionIndex;
  };

  const sort = (array: Bar[], startIndex: number, endIndex: number) => {
    if (startIndex >= endIndex) {
      return array;
    }

    const partitionIndex: number = partition(array, startIndex, endIndex);
    sort(array, startIndex, partitionIndex - 1);
    sort(array, partitionIndex + 1, endIndex);
    return array;
  };

  const sortedArray: Bar[] = sort(
    arrayToSortCopy,
    0,
    arrayToSortCopy.length - 1
  );

  sortedArray.forEach((bar: Bar) => {
    bar.color = "SpringGreen";
  });

  sortingSteps.push(sortedArray);

  return sortingSteps;
};

export const generateSoringSteps = (
  arrayToSort: Bar[],
  algorithm: SortingAlgorithm = "Merge"
): Bar[][] => {
  switch (algorithm) {
    case "Bubble":
      return bubbleSort(arrayToSort);
    case "Selection":
      return selectionSort(arrayToSort);
    case "Insertion":
      return insertionSort(arrayToSort);
    case "Merge":
      return mergeSort(arrayToSort);
    case "Quick":
      return quickSort(arrayToSort);
    default:
      throw Error("Algorithm not implemented.");
  }
};
