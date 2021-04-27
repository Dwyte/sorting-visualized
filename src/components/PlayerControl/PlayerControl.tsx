interface Props {
  graphDataStep: number;
  isPlaying: boolean;
  onRandom: React.MouseEventHandler<HTMLButtonElement>;
  onPrevious: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPause: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
}

export const PlayerControl: React.FC<Props> = ({
  graphDataStep,
  isPlaying,
  onRandom,
  onPrevious,
  onPlay,
  onPause,
  onNext,
}) => {
  return (
    <div>
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
    </div>
  );
};
