import { useContext } from "react";

import { IsPlayingContext } from "../../contexts/IsPlayingContext";
import { StepProgress, Container } from "./styles";

interface Props {
  currentStep: number;
  totalSteps: number;
  onPrevious: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPause: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  onChangeSlider: React.ChangeEventHandler<HTMLInputElement>;
}

export const PlayerControl: React.FC<Props> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onPlay,
  onPause,
  onNext,
  onChangeSlider,
}) => {
  const isPlaying: boolean = useContext(IsPlayingContext);

  return (
    <Container>
      <button onClick={onPrevious} disabled={isPlaying}>
        {"<"}
      </button>
      {isPlaying && <button onClick={onPause}>Pause</button>}
      {!isPlaying && <button onClick={onPlay}>Play</button>}
      <button onClick={onNext} disabled={isPlaying}>
        {">"}
      </button>

      <StepProgress
        type="range"
        min={0}
        max={totalSteps - 1}
        value={currentStep}
        onChange={onChangeSlider}
      />
    </Container>
  );
};
