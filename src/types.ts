export interface Bar {
  value: number;
  color?: string;
}

export type PlaySpeed = 1 | 2 | 3 | 4 | 5 | 10;

export interface PlaySpeedConfig {
  playSpeed: PlaySpeed;
  playStepSize: number;
  playStepIntervalMS: number;
}

export type SortingAlgorithm = "Bubble" | "Selection" | "Insertion" | "Merge";

export type VisualizerCount = 1 | 2 | 4;

export type SortingSteps = Bar[][];

export type AllSortingSteps = {
  [key in SortingAlgorithm]: SortingSteps;
};
