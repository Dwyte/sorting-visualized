import {
  ArraySizeConfig,
  ArrayVariation,
  PlaySpeed,
  PlaySpeedConfig,
  SelectOption,
  SortingAlgorithm,
  VisualizerCount,
} from "./types";

export const sortingAlgorithms: SortingAlgorithm[] = [
  "Quick",
  "Merge",
  "Bubble",
  "Insertion",
  "Selection",
];

export const playSpeeds: PlaySpeed[] = [1, 2, 3, 4, 5];

export const playSpeedConfigs: PlaySpeedConfig[] = [
  {
    playSpeed: 1,
    playStepSize: 1,
    playStepIntervalMS: 500,
  },
  {
    playSpeed: 2,
    playStepSize: 1,
    playStepIntervalMS: 200,
  },
  {
    playSpeed: 3,
    playStepSize: 1,
    playStepIntervalMS: 50,
  },
  {
    playSpeed: 4,
    playStepSize: 2,
    playStepIntervalMS: 25,
  },
  {
    playSpeed: 5,
    playStepSize: 3,
    playStepIntervalMS: 10,
  },
];

export const visualizerCountSelectOptions = [
  { label: "Single", value: 1 },
  { label: "Double", value: 2 },
  { label: "Quadruple", value: 4 },
];

export const arraySizeConfigs: ArraySizeConfig[] = [
  { arraySize: "Small", actualSize: 10 },
  { arraySize: "Medium", actualSize: 25 },
  { arraySize: "Large", actualSize: 50 },
];

export const arrayVariations: ArrayVariation[] = [
  "Unique",
  "Random",
  "Reversed",
  "Nearly",
];

export const sortingAlgorithmsSelectOptions: SelectOption[] =
  sortingAlgorithms.map((algorithm) => ({
    label: algorithm,
    value: algorithm,
  }));

export const arraySizeSelectOptions: SelectOption[] = arraySizeConfigs.map(
  (arraySizeConfig: ArraySizeConfig) => ({
    label: arraySizeConfig.arraySize,
    value: arraySizeConfig.arraySize,
  })
);

export const arrayVariationSelectOptions: SelectOption[] = arrayVariations.map(
  (arrayVariation: ArrayVariation) => ({
    label: arrayVariation,
    value: arrayVariation,
  })
);

export const playSpeedSelectOptions: SelectOption[] = playSpeedConfigs.map(
  (playSpeedConfig: PlaySpeedConfig) => ({
    label: `${playSpeedConfig.playSpeed}x`,
    value: playSpeedConfig.playSpeed,
  })
);
