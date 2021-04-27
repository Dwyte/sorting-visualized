import { Slider, Container } from "./styles";

interface Props {
  isPlaying: boolean;
  graphDataStep: number;
  graphDataStepsLength: number;
  onRandom: React.MouseEventHandler<HTMLButtonElement>;
  onPrevious: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPause: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  onSliderChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const PlayerControl: React.FC<Props> = ({
  isPlaying,
  graphDataStep,
  graphDataStepsLength,
  onRandom,
  onPrevious,
  onPlay,
  onPause,
  onNext,
  onSliderChange,
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
      <button disabled>{graphDataStep}</button>

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
