import styled from "styled-components";
import { SelectOption } from "../../types";
import { Button, ButtonFlexGroup } from "../common/Button";

const SelectLabel = styled.h4`
  margin-top: 0px;
  margin-bottom: 4px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: capitalize;

  i {
    margin-right: 4px;
  }
`;

interface Props {
  title: string;
  faIcon?: string;
  options: SelectOption[];
  activeOption: any;
  onChange: (optionValue: any) => void;
  disabled?: boolean;
}

export const Select: React.FC<Props> = ({
  title,
  faIcon,
  options,
  activeOption,
  disabled = false,
  onChange,
}) => {
  return (
    <div>
      <SelectLabel>
        {faIcon && <i className={faIcon}></i>}
        {title}
      </SelectLabel>
      <ButtonFlexGroup>
        {options.map((option) => (
          <Button
            onClick={() => onChange(option.value)}
            isActive={activeOption === option.value}
            disabled={disabled}
          >
            {option.label}
          </Button>
        ))}
      </ButtonFlexGroup>
    </div>
  );
};
