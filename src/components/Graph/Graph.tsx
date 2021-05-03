import { Container, BarItem } from "./styles";
import { Bar } from "../../types";

interface Props {
  data: Bar[];
}

export const Graph: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((bar: Bar, index: number) => (
        <BarItem key={index} value={bar.value} color={bar.color} />
      ))}
    </Container>
  );
};
