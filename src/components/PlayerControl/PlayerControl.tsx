import { playSpeedConfigs, sortingAlgorithms } from "../../constants";
import { PlaySpeedConfig, SortingAlgorithm } from "../../types";
import { Slider, Container } from "./styles";

interface Props {
  isPlaying: boolean;
  graphDataStep: number;
  graphDataStepsLength: number;
  sortingAlgorithm: SortingAlgorithm;
  playSpeedConfig: PlaySpeedConfig;
  onRandom: React.MouseEventHandler<HTMLButtonElement>;
  onPrevious: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPause: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  onSliderChange: React.ChangeEventHandler<HTMLInputElement>;
  onSelectAlgorithm: React.ChangeEventHandler<HTMLSelectElement>;
  onSelectPlaySpeed: React.ChangeEventHandler<HTMLSelectElement>;
}

export const PlayerControl: React.FC<Props> = ({
  isPlaying,
  graphDataStep,
  graphDataStepsLength,
  sortingAlgorithm,
  playSpeedConfig,
  onRandom,
  onPrevious,
  onPlay,
  onPause,
  onNext,
  onSliderChange,
  onSelectAlgorithm,
  onSelectPlaySpeed,
}) => {
  return (
    <Container>
      <select
        value={sortingAlgorithm}
        onChange={onSelectAlgorithm}
        disabled={isPlaying}
      >
        {sortingAlgorithms.map((algorithm: SortingAlgorithm) => (
          <option key={algorithm} value={algorithm}>
            {algorithm} Sort
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
        onChange={onSelectPlaySpeed}
        disabled={isPlaying}
      >
        {playSpeedConfigs.map((playSpeedConfigs: PlaySpeedConfig) => (
          <option
            key={playSpeedConfigs.playSpeed}
            value={playSpeedConfigs.playSpeed}
          >
            {playSpeedConfigs.playSpeed}x
          </option>
        ))}
      </select>

      <button style={{ width: "50px" }} disabled>
        {graphDataStep}
      </button>

      <Slider
        type="range"
        min={0}
        max={graphDataStepsLength - 1}
        value={graphDataStep}
        onChange={onSliderChange}
      />
    </Container>
  );
};
