import { sortingAlgorithms } from "../../constants";
import { SortingAlgorithm } from "../../types";
import { AlgorithmSelect } from "./style";

interface Props {
  activeAlgorithm: SortingAlgorithm;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  disabled: boolean;
}

export const AlgorithmSelection: React.FC<Props> = ({
  activeAlgorithm,
  disabled,
  onChange,
}) => {
  return (
    <AlgorithmSelect
      value={activeAlgorithm}
      onChange={onChange}
      disabled={disabled}
    >
      {sortingAlgorithms.map((algorithm: SortingAlgorithm) => (
        <option key={algorithm} value={algorithm}>
          {algorithm} Sort
        </option>
      ))}
    </AlgorithmSelect>
  );
};
