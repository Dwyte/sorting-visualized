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
import { Button, ButtonFlexGroup } from "../common/Button";
import { Select } from "../Select";
import {
  HeaderControlsContainer,
  HeaderContainer,
  TitleH1,
  SubtitleH2,
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
      <TitleH1>Sorting, Visualized.</TitleH1>
      <SubtitleH2>DEVELOPED BY DWIGHT</SubtitleH2>
      <HeaderControlsContainer>
        <Select
          title="Array Variation"
          options={arrayVariationSelectOptions}
          activeOption={arrayVariation}
          onChange={onChangeArrayVariation}
          disabled={isPlaying}
        />
        <Select
          title="Array Size"
          options={arraySizeSelectOptions}
          activeOption={arraySizeConfig.arraySize}
          onChange={onChangeArraySize}
          disabled={isPlaying}
        />
        <Select
          title="Visualizer Count"
          options={visualizerCountSelectOptions}
          activeOption={visualizerCount}
          onChange={onChangeVisualizerCount}
          disabled={isPlaying}
        />
        <Select
          title="Play Speed"
          options={playSpeedSelectOptions}
          activeOption={playSpeedConfig.playSpeed}
          onChange={onChangePlaySpeed}
          disabled={isPlaying}
        />
        <ButtonFlexGroup>
          <Button onClick={onRandom} disabled={isPlaying} isActive>
            Random
          </Button>
          <Button onClick={onReset} isActive>
            Reset
          </Button>
        </ButtonFlexGroup>
      </HeaderControlsContainer>
    </HeaderContainer>
  );
};
