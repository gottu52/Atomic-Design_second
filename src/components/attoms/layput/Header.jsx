import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Homeへ</SLink>
      <SLink to="/users">ユーザー一覧へ</SLink>
    </SHeader>
  );
};

const SHeader = styled.div`
  background-color: #11999e;
  text-align: center;
  color: #fff;
  padding: 8px 0;
`;
const SLink = styled(Link)`
  margin: 0 16px;
`;
