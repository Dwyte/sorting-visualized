import { useContext } from "react";

import { IsPlayingContext } from "../../contexts/IsPlayingContext";
import {
  arraySizeConfigs,
  arrayVariations,
  playSpeedConfigs,
  visualizerCountConfigs,
} from "../../constants";
import { ArraySizeConfig, ArrayVariation, PlaySpeedConfig } from "../../types";
import { Slider, Container } from "./styles";

interface Props {
  currentStep: number;
  totalSteps: number;
  playSpeedConfig: PlaySpeedConfig;
  visualizerCount: number;
  arraySizeConfig: ArraySizeConfig;
  arrayVariation: ArrayVariation;
  onRandom: React.MouseEventHandler<HTMLButtonElement>;
  onPrevious: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPause: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  onChangeSlider: React.ChangeEventHandler<HTMLInputElement>;
  onChangePlaySpeed: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeVisualizerCount: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeArraySize: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeArrayVariation: React.ChangeEventHandler<HTMLSelectElement>;
}

export const PlayerControl: React.FC<Props> = ({
  currentStep,
  totalSteps,
  playSpeedConfig,
  visualizerCount,
  arraySizeConfig,
  arrayVariation,
  onRandom,
  onPrevious,
  onPlay,
  onPause,
  onNext,
  onChangeSlider,
  onChangePlaySpeed,
  onChangeVisualizerCount,
  onChangeArraySize,
  onChangeArrayVariation,
}) => {
  const isPlaying: boolean = useContext(IsPlayingContext);

  return (
    <Container>
      <select
        value={arrayVariation}
        onChange={onChangeArrayVariation}
        disabled={isPlaying}
      >
        {arrayVariations.map((varitiation: ArrayVariation) => (
          <option key={varitiation} value={varitiation}>
            {varitiation}
          </option>
        ))}
      </select>
      <select
        value={arraySizeConfig.arraySize}
        onChange={onChangeArraySize}
        disabled={isPlaying}
      >
        {arraySizeConfigs.map((config: ArraySizeConfig) => (
          <option key={config.arraySize} value={config.arraySize}>
            {config.arraySize}
          </option>
        ))}
      </select>
      <select
        value={visualizerCount}
        onChange={onChangeVisualizerCount}
        disabled={isPlaying}
      >
        {visualizerCountConfigs.map((visualizerCount: number) => (
          <option key={visualizerCount} value={visualizerCount}>
            {visualizerCount}
          </option>
        ))}
      </select>

      <button onClick={onRandom} disabled={isPlaying}>
        Random
      </button>
      <button onClick={onPrevious} disabled={isPlaying}>
        {"<"}
      </button>
      {isPlaying && <button onClick={onPause}>Pause</button>}
      {!isPlaying && <button onClick={onPlay}>Play</button>}
      <button onClick={onNext} disabled={isPlaying}>
        {">"}
      </button>

      <select
        value={playSpeedConfig.playSpeed}
        onChange={onChangePlaySpeed}
        disabled={isPlaying}
      >
        {playSpeedConfigs.map((config: PlaySpeedConfig) => (
          <option key={config.playSpeed} value={config.playSpeed}>
            {config.playSpeed}x
          </option>
        ))}
      </select>

      <button style={{ width: "50px" }} disabled>
        {currentStep}
      </button>

      <Slider
        type="range"
        min={0}
        max={totalSteps - 1}
        value={currentStep}
        onChange={onChangeSlider}
      />
    </Container>
  );
};
