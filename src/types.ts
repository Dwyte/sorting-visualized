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

export type SortingAlgorithm =
  | "Bubble"
  | "Selection"
  | "Insertion"
  | "Merge"
  | "Quick";

export type VisualizerCount = 1 | 2 | 4;

export type SortingSteps = Bar[][];

export type AllSortingSteps = {
  [key in SortingAlgorithm]: SortingSteps;
};

export type ArraySize = "Small" | "Medium" | "Large";
export interface ArraySizeConfig {
  arraySize: ArraySize;
  actualSize: number;
}

export type ArrayVariation = "Unique" | "Random";

export interface SelectOption {
  label: string;
  value: any;
}
