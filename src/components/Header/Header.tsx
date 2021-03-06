import { useContext } from "react";
import {
  arrayVariationSelectOptions,
  arraySizeSelectOptions,
  visualizerCountSelectOptions,
  playSpeedSelectOptions,
} from "../../constants";
import { IsPlayingContext } from "../../contexts/IsPlayingContext";
import {
  ArrayVariation,
  ArraySizeConfig,
  PlaySpeedConfig,
  ArraySize,
} from "../../types";
import { Anchor } from "../common/Anchor";
import { Button, ButtonFlexGroup } from "../common/Button";
import { Select } from "../Select";
import {
  HeaderControlsContainer,
  HeaderContainer,
  TitleH1,
  SubtitleH2,
  Space,
} from "./style";

interface Props {
  visualizerCount: number;
  arraySizeConfig: ArraySizeConfig;
  arrayVariation: ArrayVariation;
  playSpeedConfig: PlaySpeedConfig;
  onRandom: React.MouseEventHandler<HTMLButtonElement>;
  onReset: React.MouseEventHandler<HTMLButtonElement>;
  onChangeVisualizerCount: (newVisualizerCount: number) => void;
  onChangeArraySize: (newArraySize: ArraySize) => void;
  onChangeArrayVariation: (newArrayVariation: ArrayVariation) => void;
  onChangePlaySpeed: (newPlaySpeed: number) => void;
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
    <HeaderContainer>
      <div>
        <TitleH1>Sorting, Visualized.</TitleH1>
        <SubtitleH2>
          <Anchor
            href="https://www.github.com/dwyte/sorting-visualized"
            faClassName="fas fa-code"
          />{" "}
          DEVELOPED BY <Anchor href="https://dwyte.github.io" label="DWIGHT" />
        </SubtitleH2>
      </div>

      <Space />

      <HeaderControlsContainer>
        <Select
          title="Visualizers"
          faIcon="fas fa-square"
          options={visualizerCountSelectOptions}
          activeOption={visualizerCount}
          onChange={onChangeVisualizerCount}
          disabled={isPlaying}
        />
        <Select
          title="Variation"
          faIcon="fas fa-chart-bar"
          options={arrayVariationSelectOptions}
          activeOption={arrayVariation}
          onChange={onChangeArrayVariation}
          disabled={isPlaying}
        />
        <Select
          title="Length"
          faIcon="fas fa-sort-amount-up"
          options={arraySizeSelectOptions}
          activeOption={arraySizeConfig.arraySize}
          onChange={onChangeArraySize}
          disabled={isPlaying}
        />

        <Select
          title="Speed"
          faIcon="fas fa-forward"
          options={playSpeedSelectOptions}
          activeOption={playSpeedConfig.playSpeed}
          onChange={onChangePlaySpeed}
          // disabled={isPlaying}
        />
      </HeaderControlsContainer>
      <ButtonFlexGroup>
        <Button
          padding="large"
          onClick={onRandom}
          disabled={isPlaying}
          isIconLarge
          isActive
        >
          <i className="fas fa-dice-six"></i>
          Randomize
        </Button>
        <Button padding="large" onClick={onReset} isIconLarge isActive>
          <i className="fas fa-undo"></i>
          Reset
        </Button>
      </ButtonFlexGroup>
    </HeaderContainer>
  );
};
