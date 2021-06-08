import styled, { css } from "styled-components";

interface Props {
  href: string | undefined;
  faClassName?: string;
  label?: string;
}

const A = styled.a<{ hasLabel: boolean }>`
  ${({ hasLabel }) =>
    hasLabel &&
    css`
      i {
        margin-right: 0.25rem;
      }
      padding-bottom: 0.125rem;
      border-bottom: 1px dashed orange;
      white-space: pre;
    `};

  color: white;
  text-decoration: none;

  :hover {
    color: orange;
  }
`;

export const Anchor: React.FC<Props> = ({ href, label, faClassName }) => {
  return (
    <A href={href} target="_blank" hasLabel={Boolean(label)}>
      <i className={faClassName || "fas fa-caret-right"}></i>
      {label}
    </A>
  );
};
