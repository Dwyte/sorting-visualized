import styled from "styled-components";

interface Props {
  href: string | undefined;
}

const A = styled.a`
  i {
    margin-right: 4px;
  }

  color: white;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px dashed orange;

  :hover {
    color: orange;
  }
`;

export const Anchor: React.FC<Props> = ({ href, children }) => {
  return (
    <A href={href} target="_blank">
      <i className="fas fa-caret-right"></i>
      {children}
    </A>
  );
};
