import React, { useState } from "react";
import { sortingAlgorithms } from "../../constants";
import { SortingAlgorithm } from "../../types";
import { AlgorithmOption, AlgorithmSelect } from "./style";

interface Props {
  activeAlgorithm: SortingAlgorithm;
  onChange: (sortingAlgorithm: SortingAlgorithm) => void;
  disabled: boolean;
}

export const AlgorithmSelection: React.FC<Props> = ({
  activeAlgorithm,
  disabled,
  onChange,
}) => {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  const inActiveAlgorithms = sortingAlgorithms.filter(
    (algorithm: SortingAlgorithm) => algorithm !== activeAlgorithm
  );

  const handleMouseLeave = () => setIsSelecting(false);
  const handleActivateSelection = () => setIsSelecting(!isSelecting);
  const handleOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChange((event.target as any).value);
    setIsSelecting(false);
  };

  return (
    <AlgorithmSelect onMouseLeave={handleMouseLeave}>
      <AlgorithmOption
        onClick={disabled ? undefined : handleActivateSelection}
        isActive
      >
        {activeAlgorithm} {!disabled && <i className="fas fa-caret-right"></i>}
      </AlgorithmOption>

      {!disabled &&
        isSelecting &&
        inActiveAlgorithms.map((algorithm: SortingAlgorithm) => (
          <AlgorithmOption
            onClick={handleOptionClick}
            value={algorithm}
            key={algorithm}
            isActive={false}
          >
            {algorithm}
          </AlgorithmOption>
        ))}
    </AlgorithmSelect>
  );
};
