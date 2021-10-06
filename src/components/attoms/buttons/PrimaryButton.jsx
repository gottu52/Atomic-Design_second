import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #40514b;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
