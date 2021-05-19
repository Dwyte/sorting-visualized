import { playSpeedConfigs } from "../../constants";
import { PlaySpeedConfig } from "../../types";
import { Slider, Container } from "./styles";

interface Props {
  isPlaying: boolean;
  graphDataStep: number;
  graphDataStepsLength: number;
  playSpeedConfig: PlaySpeedConfig;
  onRandom: React.MouseEventHandler<HTMLButtonElement>;
  onPrevious: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPause: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  onSliderChange: React.ChangeEventHandler<HTMLInputElement>;
  onSelectPlaySpeed: React.ChangeEventHandler<HTMLSelectElement>;
}

export const PlayerControl: React.FC<Props> = ({
  isPlaying,
  graphDataStep,
  graphDataStepsLength,
  playSpeedConfig,
  onRandom,
  onPrevious,
  onPlay,
  onPause,
  onNext,
  onSliderChange,
  onSelectPlaySpeed,
}) => {
  return (
    <Container>
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
