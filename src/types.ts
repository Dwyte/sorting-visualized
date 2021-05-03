export interface Bar {
  value: number;
  color?: string;
}

export type PlaySpeed = 1 | 2 | 3 | 4 | 5;

export interface PlaySpeedConfig {
  playSpeed: PlaySpeed;
  playStepSize: number;
  playStepIntervalMS: number;
}

export type SortingAlgorithm = "Bubble" | "Selection" | "Insertion" | "Merge";
