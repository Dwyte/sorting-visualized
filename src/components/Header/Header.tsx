import { useContext } from "react";
import {
  arrayVariations,
  arraySizeConfigs,
  visualizerCountConfigs,
  playSpeedConfigs,
} from "../../constants";
import { IsPlayingContext } from "../../contexts/IsPlayingContext";
import { ArrayVariation, ArraySizeConfig, PlaySpeedConfig } from "../../types";

interface Props {
  visualizerCount: number;
  arraySizeConfig: ArraySizeConfig;
  arrayVariation: ArrayVariation;
  playSpeedConfig: PlaySpeedConfig;
  onRandom: React.MouseEventHandler<HTMLButtonElement>;
  onReset: React.MouseEventHandler<HTMLButtonElement>;
  onChangeVisualizerCount: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeArraySize: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeArrayVariation: React.ChangeEventHandler<HTMLSelectElement>;
  onChangePlaySpeed: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Header: React.FC<Props> = ({
  visualizerCount,
  arraySizeConfig,
  arrayVariation,
  playSpeedConfig,
  onRandom,
  onReset,
  onChangeVisualizerCount,
  onChangeArraySize,
  onChangeArrayVariation,
  onChangePlaySpeed,
}) => {
  const isPlaying: boolean = useContext(IsPlayingContext);

  return (
    <header>
      <h1>Sorting Visualizer</h1>

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
      <button onClick={onReset}>Reset</button>

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
    </header>
  );
};
