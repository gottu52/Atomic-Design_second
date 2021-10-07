import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy;damy-copylight</SFooter>;
};

const SFooter = styled.div`
  background-color: #11999e;
  text-align: center;
  color: #fff;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
