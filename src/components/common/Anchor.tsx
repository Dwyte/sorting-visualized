import styled from "styled-components";

interface Props {
  href: string | undefined;
}

const A = styled.a`
  i {
    margin-right: 0.25rem;
  }

  color: white;
  text-decoration: none;
  padding-bottom: 0.125rem;
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
