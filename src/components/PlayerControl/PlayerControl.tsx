import { useContext } from "react";

import { IsPlayingContext } from "../../contexts/IsPlayingContext";
import { StepProgress, Container, StepButton } from "./styles";

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
      <StepButton onClick={onPrevious} disabled={isPlaying}>
        <i className="fas fa-step-backward"></i>
      </StepButton>

      {isPlaying && (
        <StepButton onClick={onPause}>
          <i className="fas fa-pause"></i>
        </StepButton>
      )}

      {!isPlaying && (
        <StepButton onClick={onPlay}>
          <i className="fas fa-play"></i>
        </StepButton>
      )}

      <StepButton onClick={onNext} disabled={isPlaying}>
        <i className="fas fa-step-forward"></i>
      </StepButton>

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
