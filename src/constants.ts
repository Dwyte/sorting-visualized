import { PlaySpeed, PlaySpeedConfig, SortingAlgorithm } from "./types";

export const sortingAlgorithms: SortingAlgorithm[] = [
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
    playStepIntervalMS: 60,
  },
  {
    playSpeed: 4,
    playStepSize: 2,
    playStepIntervalMS: 24,
  },
  {
    playSpeed: 5,
    playStepSize: 5,
    playStepIntervalMS: 5,
  },
];

export const visualizerCountConfigs = [1, 2, 4];
