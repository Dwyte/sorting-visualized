import { Container, BarItem } from "./styles";
import { Bar } from "../../types";

interface Props {
  data: Bar[];
}

export const Graph: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((bar: Bar) => (
        <BarItem key={bar.id} value={bar.value} color={bar.color} />
      ))}
    </Container>
  );
};
