import { Container, Bar } from "./styles";

interface Props {
  data: number[];
}

export const Graph: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((value) => (
        <Bar value={value} />
      ))}
    </Container>
  );
};
